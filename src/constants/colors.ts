const fire = {
  img: 'bg-[#B85A1C] dark:bg-[#D96F24]',

  bg: {
    default: 'bg-[#EE8130] dark:bg-[#B85A1C]',
    inverse: 'bg-[#8C4314] dark:bg-[#F4A261]',
  },

  text: {
    default: 'text-[#2B1407] dark:text-[#F7B88A]',
    inverse: 'text-[#F7B88A] dark:text-[#2B1407]',
  },

  border: 'border-[#B85A1C] dark:border-[#F7B88A]',

  active: `
    data-[state=on]:bg-[#B85A1C] dark:data-[state=on]:bg-[#F4A261]
    data-[state=on]:text-[#FFF1E6] dark:data-[state=on]:text-[#2B1407]
    hover:bg-[#E27628] dark:hover:bg-[#EE8130]
    hover:text-[#FFF1E6] dark:hover:text-[#2B1407]
  `,
};

const normal = {
  img: 'bg-[#6F6D50] dark:bg-[#92906A]',

  bg: {
    default: 'bg-[#A8A77A] dark:bg-[#6F6D50]',
    inverse: 'bg-[#54533C] dark:bg-[#C2C19A]',
  },

  text: {
    default: 'text-[#232316] dark:text-[#F7F6E5]',
    inverse: 'text-[#F7F6E5] dark:text-[#232316]',
  },

  border: 'border-[#92906A] dark:border-[#DDDDB8]',

  active: `
    data-[state=on]:bg-[#6F6D50] dark:data-[state=on]:bg-[#C2C19A]
    data-[state=on]:text-[#F7F6E5] dark:data-[state=on]:text-[#232316]
    hover:bg-[#9C9B70] dark:hover:bg-[#A8A77A]
    hover:text-[#F7F6E5] dark:hover:text-[#232316]
  `,
};

const water = {
  img: 'bg-[#3C63B8] dark:bg-[#4F7DE0]',

  bg: {
    default: 'bg-[#6390F0] dark:bg-[#3C63B8]',
    inverse: 'bg-[#2C4A8A] dark:bg-[#8FB3F7]',
  },

  text: {
    default: 'text-[#0F1E3A] dark:text-[#EAF1FF]',
    inverse: 'text-[#EAF1FF] dark:text-[#0F1E3A]',
  },

  border: 'border-[#4F7DE0] dark:border-[#BFD3FA]',

  active: `
    data-[state=on]:bg-[#3C63B8] dark:data-[state=on]:bg-[#8FB3F7]
    data-[state=on]:text-[#EAF1FF] dark:data-[state=on]:text-[#0F1E3A]
    hover:bg-[#5A85E8] dark:hover:bg-[#6390F0]
    hover:text-[#EAF1FF] dark:hover:text-[#0F1E3A]
  `,
};

const electric = {
  img: 'bg-[#B8961F] dark:bg-[#E0BA27]',

  bg: {
    default: 'bg-[#F7D02C] dark:bg-[#B8961F]',
    inverse: 'bg-[#8A6F17] dark:bg-[#FAE27A]',
  },

  text: {
    default: 'text-[#2B2408] dark:text-[#FFFBE6]',
    inverse: 'text-[#FFFBE6] dark:text-[#2B2408]',
  },

  border: 'border-[#E0BA27] dark:border-[#FCEB9A]',

  active: `
    data-[state=on]:bg-[#B8961F] dark:data-[state=on]:bg-[#FAE27A]
    data-[state=on]:text-[#FFFBE6] dark:data-[state=on]:text-[#2B2408]
    hover:bg-[#EDC92A] dark:hover:bg-[#F7D02C]
    hover:text-[#FFFBE6] dark:hover:text-[#2B2408]
  `,
};

const grass = {
  img: 'bg-[#4F8A31] dark:bg-[#69B03F]',

  bg: {
    default: 'bg-[#7AC74C] dark:bg-[#4F8A31]',
    inverse: 'bg-[#3A6624] dark:bg-[#A4E07A]',
  },

  text: {
    default: 'text-[#13260B] dark:text-[#C6F2A8]',
    inverse: 'text-[#F1FFE8] dark:text-[#13260B]',
  },

  border: 'border-[#69B03F] dark:border-[#C6F2A8]',

  active: `
    data-[state=on]:bg-[#4F8A31] dark:data-[state=on]:bg-[#A4E07A]
    data-[state=on]:text-[#F1FFE8] dark:data-[state=on]:text-[#13260B]
    hover:bg-[#70BD45] dark:hover:bg-[#7AC74C]
    hover:text-[#F1FFE8] dark:hover:text-[#13260B]
  `,
};

const ice = {
  img: 'bg-[#5FA3A0] dark:bg-[#7FC7C3]',

  bg: {
    default: 'bg-[#96D9D6] dark:bg-[#5FA3A0]',
    inverse: 'bg-[#3F7C79] dark:bg-[#BEEFED]',
  },

  text: {
    default: 'text-[#0C2625] dark:text-[#E8FFFF]',
    inverse: 'text-[#E8FFFF] dark:text-[#0C2625]',
  },

  border: 'border-[#7FC7C3] dark:border-[#D4F6F4]',

  active: `
    data-[state=on]:bg-[#5FA3A0] dark:data-[state=on]:bg-[#BEEFED]
    data-[state=on]:text-[#E8FFFF] dark:data-[state=on]:text-[#0C2625]
    hover:bg-[#8BD3CF] dark:hover:bg-[#96D9D6]
    hover:text-[#E8FFFF] dark:hover:text-[#0C2625]
  `,
};

const fighting = {
  img: 'bg-[#8F1F1A] dark:bg-[#D94A44]',

  bg: {
    default: 'bg-[#C22E28] dark:bg-[#8F1F1A]',
    inverse: 'bg-[#6E1713] dark:bg-[#D94A44]',
  },

  text: {
    default: 'text-[#2A0A09] dark:text-[#FFECEC]',
    inverse: 'text-[#FFECEC] dark:text-[#2A0A09]',
  },

  border: 'border-[#A12621] dark:border-[#E5736E]',

  active: `
    data-[state=on]:bg-[#8F1F1A] dark:data-[state=on]:bg-[#D94A44]
    data-[state=on]:text-[#FFECEC] dark:data-[state=on]:text-[#2A0A09]
    hover:bg-[#B02A24] dark:hover:bg-[#C22E28]
    hover:text-[#FFECEC] dark:hover:text-[#2A0A09]
  `,
};

const poison = {
  img: 'bg-[#7A2D79] dark:bg-[#B85CB6]',

  bg: {
    default: 'bg-[#A33EA1] dark:bg-[#7A2D79]',
    inverse: 'bg-[#5C215B] dark:bg-[#B85CB6]',
  },

  text: {
    default: 'text-[#240A24] dark:text-[#FBE9FB]',
    inverse: 'text-[#FBE9FB] dark:text-[#240A24]',
  },

  border: 'border-[#8A3488] dark:border-[#D48ED2]',

  active: `
    data-[state=on]:bg-[#7A2D79] dark:data-[state=on]:bg-[#B85CB6]
    data-[state=on]:text-[#FBE9FB] dark:data-[state=on]:text-[#240A24]
    hover:bg-[#923891] dark:hover:bg-[#A33EA1]
    hover:text-[#FBE9FB] dark:hover:text-[#240A24]
  `,
};

const ground = {
  img: 'bg-[#9F823C] dark:bg-[#C9A84F]',

  bg: {
    default: 'bg-[#E2BF65] dark:bg-[#9F823C]',
    inverse: 'bg-[#7C642E] dark:bg-[#F0D98A]',
  },

  text: {
    default: 'text-[#2B210E] dark:text-[#F2DE9C]',
    inverse: 'text-[#F2DE9C] dark:text-[#2B210E]',
  },

  border: 'border-[#C5A652] dark:border-[#F2DE9C]',

  active: `
    data-[state=on]:bg-[#9F823C] dark:data-[state=on]:bg-[#F0D98A]
    data-[state=on]:text-[#F2DE9C] dark:data-[state=on]:text-[#2B210E]
    hover:bg-[#D4B45C] dark:hover:bg-[#E2BF65]
    hover:text-[#F2DE9C] dark:hover:text-[#2B210E]
  `,
};

const flying = {
  img: 'bg-[#6C57B8] dark:bg-[#8C73E0]',

  bg: {
    default: 'bg-[#A98FF3] dark:bg-[#6C57B8]',
    inverse: 'bg-[#51418A] dark:bg-[#C2AFF7]',
  },

  text: {
    default: 'text-[#1F153F] dark:text-[#F3EEFF]',
    inverse: 'text-[#F3EEFF] dark:text-[#1F153F]',
  },

  border: 'border-[#8E77D9] dark:border-[#D4C7FA]',

  active: `
    data-[state=on]:bg-[#6C57B8] dark:data-[state=on]:bg-[#C2AFF7]
    data-[state=on]:text-[#F3EEFF] dark:data-[state=on]:text-[#1F153F]
    hover:bg-[#9A80ED] dark:hover:bg-[#A98FF3]
    hover:text-[#F3EEFF] dark:hover:text-[#1F153F]
  `,
};

const psychic = {
  img: 'bg-[#B9355C] dark:bg-[#E04475]',

  bg: {
    default: 'bg-[#F95587] dark:bg-[#B9355C]',
    inverse: 'bg-[#8C2946] dark:bg-[#FB7FA3]',
  },

  text: {
    default: 'text-[#3A0F1E] dark:text-[#FFEAF1]',
    inverse: 'text-[#FFEAF1] dark:text-[#3A0F1E]',
  },

  border: 'border-[#B9355C] dark:border-[#FDB3C7]',

  active: `
    data-[state=on]:bg-[#B9355C] dark:data-[state=on]:bg-[#FB7FA3]
    data-[state=on]:text-[#FFEAF1] dark:data-[state=on]:text-[#3A0F1E]
    hover:bg-[#EC4E7E] dark:hover:bg-[#F95587]
    hover:text-[#FFEAF1] dark:hover:text-[#3A0F1E]
  `,
};

const bug = {
  img: 'bg-[#6E7C10] dark:bg-[#8FA014]',

  bg: {
    default: 'bg-[#A6B91A] dark:bg-[#6E7C10]',
    inverse: 'bg-[#545F0C] dark:bg-[#C4D94A]',
  },

  text: {
    default: 'text-[#1F2607] dark:text-[#F7FBD9]',
    inverse: 'text-[#F7FBD9] dark:text-[#1F2607]',
  },

  border: 'border-[#8FA014] dark:border-[#DCEB7A]',

  active: `
    data-[state=on]:bg-[#6E7C10] dark:data-[state=on]:bg-[#C4D94A]
    data-[state=on]:text-[#F7FBD9] dark:data-[state=on]:text-[#1F2607]
    hover:bg-[#97AA17] dark:hover:bg-[#A6B91A]
    hover:text-[#F7FBD9] dark:hover:text-[#1F2607]
  `,
};

const rock = {
  img: 'bg-[#7A6B24] dark:bg-[#9C8A2E]',

  bg: {
    default: 'bg-[#B6A136] dark:bg-[#7A6B24]',
    inverse: 'bg-[#5E531B] dark:bg-[#D1BE5A]',
  },

  text: {
    default: 'text-[#2A240C] dark:text-[#E2D38A]',
    inverse: 'text-[#E2D38A] dark:text-[#2A240C]',
  },

  border: 'border-[#9C8A2E] dark:border-[#E2D38A]',

  active: `
    data-[state=on]:bg-[#7A6B24] dark:data-[state=on]:bg-[#D1BE5A]
    data-[state=on]:text-[#E2D38A] dark:data-[state=on]:text-[#2A240C]
    hover:bg-[#A79230] dark:hover:bg-[#B6A136]
    hover:text-[#E2D38A] dark:hover:text-[#2A240C]
  `,
};

const ghost = {
  img: 'bg-[#A08CC2] dark:bg-[#8A6FB3]',

  bg: {
    default: 'bg-[#735797] dark:bg-[#5A4378]',
    inverse: 'bg-[#3F2F54] dark:bg-[#A08CC2]',
  },

  text: {
    default: 'text-[#2A1F3A] dark:text-[#E6DFF3]',
    inverse: 'text-[#E6DFF3] dark:text-[#2A1F3A]',
  },

  border: 'border-[#5A4378] dark:border-[#C7BBDD]',

  active: `
    data-[state=on]:bg-[#5A4378] dark:data-[state=on]:bg-[#A08CC2]
    data-[state=on]:text-[#2A1F3A] dark:data-[state=on]:text-[#1A1324]
    hover:bg-[#6A4F8F] dark:hover:bg-[#735797]
    hover:text-[#2A1F3A] dark:hover:text-[#1A1324]
  `,
};

const dragon = {
  img: 'bg-[#5428BD] dark:bg-[#8656FD]',

  bg: {
    default: 'bg-[#6F35FC] dark:bg-[#5428BD]',
    inverse: 'bg-[#3C1C86] dark:bg-[#A78BFA]',
  },

  text: {
    default: 'text-[#2A1A5A] dark:text-[#E9E1FF]',
    inverse: 'text-[#E9E1FF] dark:text-[#2A1A5A]',
  },

  border: 'border-[#5428BD] dark:border-[#C4B5FD]',

  active: `
    data-[state=on]:bg-[#5428BD] dark:data-[state=on]:bg-[#A78BFA]
    data-[state=on]:text-[#2A1A5A] dark:data-[state=on]:text-[#1A0F3A]
    hover:bg-[#6330E0] dark:hover:bg-[#6F35FC]
    hover:text-[#2A1A5A] dark:hover:text-[#1A0F3A]
  `,
};

const dark = {
  img: 'bg-[#574334] dark:bg-[#8A6D59]',

  bg: {
    default: 'bg-[#705746] dark:bg-[#574334]',
    inverse: 'bg-[#3E2F24] dark:bg-[#A58A78]',
  },

  text: {
    default: 'text-[#2E231C] dark:text-[#E8E0D9]',
    inverse: 'text-[#E8E0D9] dark:text-[#2E231C]',
  },

  border: 'border-[#574334] dark:border-[#CBB8AA]',

  active: `
    data-[state=on]:bg-[#574334] dark:data-[state=on]:bg-[#A58A78]
    data-[state=on]:text-[#2E231C] dark:data-[state=on]:text-[#1F1813]
    hover:bg-[#644E3F] dark:hover:bg-[#705746]
    hover:text-[#2E231C] dark:hover:text-[#1F1813]
  `,
};

const steel = {
  img: 'bg-[#7C7D91] dark:bg-[#9FA0B8]',

  bg: {
    default: 'bg-[#B7B7CE] dark:bg-[#7C7D91]',
    inverse: 'bg-[#5E5F6E] dark:bg-[#D1D2E0]',
  },

  text: {
    default: 'text-[#1C1C24] dark:text-[#F4F5FA]',
    inverse: 'text-[#F4F5FA] dark:text-[#1C1C24]',
  },

  border: 'border-[#9FA0B8] dark:border-[#E2E3EE]',

  active: `
    data-[state=on]:bg-[#7C7D91] dark:data-[state=on]:bg-[#D1D2E0]
    data-[state=on]:text-[#F4F5FA] dark:data-[state=on]:text-[#1C1C24]
    hover:bg-[#A9AABD] dark:hover:bg-[#B7B7CE]
    hover:text-[#F4F5FA] dark:hover:text-[#1C1C24]
  `,
};

const fairy = {
  img: 'bg-[#9A5777] dark:bg-[#C06F97]',

  bg: {
    default: 'bg-[#D685AD] dark:bg-[#9A5777]',
    inverse: 'bg-[#744158] dark:bg-[#E6A9C7]',
  },

  text: {
    default: 'text-[#2E0F1F] dark:text-[#FDEEF5]',
    inverse: 'text-[#FDEEF5] dark:text-[#2E0F1F]',
  },

  border: 'border-[#C06F97] dark:border-[#F1C2D6]',

  active: `
    data-[state=on]:bg-[#9A5777] dark:data-[state=on]:bg-[#E6A9C7]
    data-[state=on]:text-[#FDEEF5] dark:data-[state=on]:text-[#2E0F1F]
    hover:bg-[#CC78A3] dark:hover:bg-[#D685AD]
    hover:text-[#FDEEF5] dark:hover:text-[#2E0F1F]
  `,
};

export const POKEMON_TYPES = {
  normal,
  fire,
  water,
  electric,
  grass,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy,
};
