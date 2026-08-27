import { ReactNode } from 'react';

/**
 * Lightweight renderer for the markdown-achtige artikel-inhoud.
 * Ondersteunt: ## (h2), ### (h3), - lijsten, **vet** en paragrafen.
 */

function renderInline(text: string): ReactNode[] {
  // Split op **vet** en render de vette delen als <strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ArtikelInhoud({ inhoud }: { inhoud: string }) {
  const lines = inhoud.split('\n');
  const blocks: ReactNode[] = [];

  let listBuffer: string[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = (key: string) => {
    if (paragraphBuffer.length) {
      const text = paragraphBuffer.join(' ');
      blocks.push(
        <p
          key={key}
          className="text-lg leading-relaxed text-muted-foreground mb-6"
        >
          {renderInline(text)}
        </p>
      );
      paragraphBuffer = [];
    }
  };

  const flushList = (key: string) => {
    if (listBuffer.length) {
      blocks.push(
        <ul key={key} className="mb-6 space-y-2 pl-1">
          {listBuffer.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    const key = `block-${index}`;

    if (line.startsWith('### ')) {
      flushParagraph(key + '-p');
      flushList(key + '-l');
      blocks.push(
        <h3
          key={key}
          className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3"
        >
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      flushParagraph(key + '-p');
      flushList(key + '-l');
      blocks.push(
        <h2
          key={key}
          className="text-2xl sm:text-3xl font-black text-foreground mt-12 mb-4 scroll-mt-24"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      flushParagraph(key + '-p');
      listBuffer.push(line.slice(2));
    } else if (line === '') {
      flushParagraph(key + '-p');
      flushList(key + '-l');
    } else {
      flushList(key + '-l');
      paragraphBuffer.push(line);
    }
  });

  flushParagraph('final-p');
  flushList('final-l');

  return <div>{blocks}</div>;
}
