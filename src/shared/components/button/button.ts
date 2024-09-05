import { cva } from 'class-variance-authority';

const commonTgButtonStyles = `
  border-telegram-button
  hover:border-telegram-button
  hover:bg-telegram-button hover:opacity-90
`;

export const tgActiveButton = cva(
  `btn bg-telegram-button
   text-telegram-button-text ${commonTgButtonStyles}`
);

export const tgOutlineButton = cva(
  `btn bg-transparent text-telegram-button
  hover:text-telegram-button-text ${commonTgButtonStyles}`
);
