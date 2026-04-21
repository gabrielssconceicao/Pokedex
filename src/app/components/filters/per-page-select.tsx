'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PerPageSelectProps {
  value: number;
  onChange: (value: number) => void;
}
export function PerPageSelect({ value, onChange }: PerPageSelectProps) {
  return (
    <Select
      defaultValue={String(value)}
      onValueChange={(val) => onChange(Number(val))}
    >
      <SelectTrigger size="default" className="w-32 flex-1 md:w-48">
        <SelectValue placeholder="Itens por página" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectContent>
    </Select>
  );
}
