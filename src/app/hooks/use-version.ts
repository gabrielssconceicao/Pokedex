import { useState } from 'react';

import { VersionName } from '@/interface/version-name';

export function useVersion() {
  const [version, setVersion] = useState<VersionName>('red');

  const handleVersionChange = (version: VersionName) => {
    setVersion(version);
  };

  return { version, handleVersionChange };
}
