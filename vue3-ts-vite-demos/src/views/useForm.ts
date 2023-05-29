export default () => {
  const formItems = [
    {
      label: '品牌',
      options: [
        { value: '1', label: '奥迪' },
        { value: '2', label: '奔驰' },
        { value: '2', label: '宝马' },
        { value: '3', label: '本田' },
      ],
    },
    {
      label: '级别',
      options: [
        { value: '1', label: '轿车' },
        { value: '2', label: 'SUV' },
        { value: '2', label: 'MPV' },
        { value: '3', label: '跑车' },
      ],
    },
    {
      label: '厂商属性',
      options: [
        { value: '1', label: '合资' },
        { value: '2', label: '自主' },
        { value: '2', label: '合资自主' },
        { value: '3', label: '进口' },
      ],
    },
  ];

  const mockToNodes = () => {
    return '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((symbol, k) => {
      const start = k * 30;
      const data = Array(30)
        .fill(null)
        .map((item, index) => {
          return {
            key: `${start + index}`,
            value: `${symbol} 测试商品列表项 ${start + index}`,
          };
        });
      return { symbol, data };
    });
  };

  return { formItems, mockToNodes };
};
