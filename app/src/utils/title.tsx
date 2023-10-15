export const setTitle = (text?: string) => {
  const title = 'Password Game';
  document.title = text ? `${text} - ${title}` : title;
};
