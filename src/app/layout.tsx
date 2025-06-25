// src/app/layout.tsx
export const metadata = {
  title: "Litera Code AI",
  description: "AI coding generator for multi-language projects"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
