'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function PdfSlides({ src }) {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);
  const thumbsRef = useRef([]);
  const thumbStripRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [thumbsReady, setThumbsReady] = useState(false);

  // Load PDF
  useEffect(() => {
    let cancelled = false;
    import('pdfjs-dist').then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
      pdfjsLib.getDocument(src).promise.then((doc) => {
        if (!cancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
        }
      });
    });
    return () => { cancelled = true; };
  }, [src]);

  // Render main slide
  const renderPage = useCallback(() => {
    if (!pdfDoc || !canvasRef.current) return;
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
      renderTaskRef.current = null;
    }
    pdfDoc.getPage(pageNum).then((page) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const container = canvas.parentElement;
      const containerWidth = container.offsetWidth;
      const vp = page.getViewport({ scale: 1 });
      const dpr = window.devicePixelRatio || 1;
      const scale = (containerWidth / vp.width) * dpr;
      const viewport = page.getViewport({ scale });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = containerWidth + 'px';
      canvas.style.height = (containerWidth * vp.height / vp.width) + 'px';
      const task = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = task;
      task.promise.then(() => {
        renderTaskRef.current = null;
      }).catch(() => {});
    });
  }, [pdfDoc, pageNum]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  useEffect(() => {
    const onResize = () => renderPage();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [renderPage]);

  // Render thumbnails once PDF loads
  useEffect(() => {
    if (!pdfDoc || numPages === 0) return;
    let cancelled = false;

    const renderThumbs = async () => {
      for (let i = 1; i <= numPages; i++) {
        if (cancelled) break;
        const page = await pdfDoc.getPage(i);
        const canvas = thumbsRef.current[i - 1];
        if (!canvas) continue;
        const vp = page.getViewport({ scale: 1 });
        const thumbWidth = 120;
        const dpr = window.devicePixelRatio || 1;
        const scale = (thumbWidth / vp.width) * dpr;
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = thumbWidth + 'px';
        canvas.style.height = (thumbWidth * vp.height / vp.width) + 'px';
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      }
      if (!cancelled) setThumbsReady(true);
    };

    renderThumbs();
    return () => { cancelled = true; };
  }, [pdfDoc, numPages]);

  // Scroll active thumb into view
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const active = thumbStripRef.current.children[pageNum - 1];
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [pageNum]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setPageNum((p) => Math.max(1, p - 1));
      if (e.key === 'ArrowRight') setPageNum((p) => Math.min(numPages, p + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [numPages]);

  return (
    <div className="pdf-slides">
      <div className="pdf-canvas-wrap">
        <canvas ref={canvasRef} />
        {numPages > 0 && (
          <span className="pdf-page-num">{pageNum} / {numPages}</span>
        )}
      </div>
      {numPages > 1 && (
        <div className="pdf-thumb-strip" ref={thumbStripRef}>
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              className={`pdf-thumb ${pageNum === i + 1 ? 'active' : ''}`}
              onClick={() => setPageNum(i + 1)}
            >
              <canvas ref={(el) => { thumbsRef.current[i] = el; }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
