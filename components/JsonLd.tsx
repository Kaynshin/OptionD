/**
 * Server component that serializes structured data (JSON-LD) into a
 * <script type="application/ld+json"> tag rendered server-side.
 *
 * Usage (pages / layout):
 *   import JsonLd from '@/components/JsonLd';
 *   <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', ... }} />
 *
 * Pass any JSON-serializable object (or array of objects) via the `data` prop.
 * No 'use client' — this renders on the server, so no next/script is needed.
 */
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
