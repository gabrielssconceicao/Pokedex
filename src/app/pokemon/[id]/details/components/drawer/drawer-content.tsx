import {
  DrawerContent as Content,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

interface Props {
  bgColor: string;
  textColor: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function DrawerContent({
  bgColor,
  textColor,
  title,
  description,
  children,
}: Props) {
  return (
    <Content className={cn(bgColor)}>
      <DrawerHeader>
        <DrawerTitle className={cn('text-xl', textColor)}>{title}</DrawerTitle>
        <DrawerDescription className={cn(textColor)}>
          {description}
        </DrawerDescription>
      </DrawerHeader>
      {children}
    </Content>
  );
}
