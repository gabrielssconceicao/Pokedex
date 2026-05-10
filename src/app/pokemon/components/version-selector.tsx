'use client';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { VersionName, VERSIONS } from '@/interface/version-name';

type FormValues = {
  version: VersionName;
};

type Props = {
  onVersionChange: (version: VersionName) => void;
};

export function VersionSelector({ onVersionChange }: Props) {
  const { control } = useForm<FormValues>({
    defaultValues: { version: 'red' },
  });

  const router = useRouter();

  const handleVersionChange = (version: VersionName) => {
    onVersionChange(version);
    router.push(`?version=${version}`);
  };

  return (
    <Controller
      control={control}
      name="version"
      render={({ field }) => (
        <Select defaultValue={field.value} onValueChange={handleVersionChange}>
          <SelectTrigger size="default" className="w-full flex-1">
            <SelectValue placeholder="Itens por página" />
          </SelectTrigger>
          <SelectContent>
            {VERSIONS.map((version) => (
              <SelectItem key={version} value={version}>
                {version}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
