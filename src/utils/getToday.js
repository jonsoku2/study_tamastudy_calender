export const getToday = () => {
  const day = [
    { id: 0, name: '일' },
    { id: 1, name: '월' },
    { id: 2, name: '화' },
    { id: 3, name: '수' },
    { id: 4, name: '목' },
    { id: 5, name: '금' },
    { id: 6, name: '토' },
  ];
  const today = day.filter(d => d.id === new Date().getDay());
  return today[0].name;
};
