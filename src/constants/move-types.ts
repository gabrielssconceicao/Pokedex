export type ContestType = 'cool' | 'beauty' | 'cute' | 'smart' | 'tough';

export type DamageClass = 'physical' | 'special' | 'status';

export type TypeKeys = {
  text: {
    default: string;
    inverse: string;
  };
  border: string;
};

export const CONTEST_TYPES: Record<ContestType, TypeKeys> = {
  cool: {
    text: {
      default: 'text-[#3B82F6] dark:text-[#93C5FD]',
      inverse: 'text-[#93C5FD] dark:text-[#3B82F6]',
    },
    border: 'border-[#3B82F6] dark:border-[#93C5FD]',
  },

  beauty: {
    text: {
      default: 'text-[#EC4899] dark:text-[#F9A8D4]',
      inverse: 'text-[#F9A8D4] dark:text-[#EC4899]',
    },
    border: 'border-[#EC4899] dark:border-[#F9A8D4]',
  },

  cute: {
    text: {
      default: 'text-[#F472B6] dark:text-[#FBCFE8]',
      inverse: 'text-[#FBCFE8] dark:text-[#F472B6]',
    },
    border: 'border-[#F472B6] dark:border-[#FBCFE8]',
  },

  smart: {
    text: {
      default: 'text-[#8B5CF6] dark:text-[#C4B5FD]',
      inverse: 'text-[#C4B5FD] dark:text-[#8B5CF6]',
    },
    border: 'border-[#8B5CF6] dark:border-[#C4B5FD]',
  },

  tough: {
    text: {
      default: 'text-[#F97316] dark:text-[#FDBA74]',
      inverse: 'text-[#FDBA74] dark:text-[#F97316]',
    },
    border: 'border-[#F97316] dark:border-[#FDBA74]',
  },
};

export const DAMAGE_CLASSES: Record<DamageClass, TypeKeys> = {
  physical: {
    text: {
      default: 'text-[#EF4444] dark:text-[#FCA5A5]',
      inverse: 'text-[#FCA5A5] dark:text-[#EF4444]',
    },
    border: 'border-[#EF4444] dark:border-[#FCA5A5]',
  },

  special: {
    text: {
      default: 'text-[#3B82F6] dark:text-[#93C5FD]',
      inverse: 'text-[#93C5FD] dark:text-[#3B82F6]',
    },
    border: 'border-[#3B82F6] dark:border-[#93C5FD]',
  },

  status: {
    text: {
      default: 'text-[#6B7280] dark:text-[#D1D5DB]',
      inverse: 'text-[#D1D5DB] dark:text-[#6B7280]',
    },
    border: 'border-[#6B7280] dark:border-[#D1D5DB]',
  },
};
