import { FC } from 'react';

interface JSONLDProps {
  data: Record<string, any>;
}

const JSONLD: FC<JSONLDProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JSONLD;
