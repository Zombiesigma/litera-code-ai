"use client"
export default function LivePreview({ html }) {
  return (
    <iframe
      className="w-full h-[400px] border mt-4"
      srcDoc={html}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}