import * as b from'./styledcomponent/button.tsx' 
const ButtonDemo = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 작은 크기 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Small Buttons:</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <b.StyledButton size="sm" theme="brown">저장</b.StyledButton>
          <b.StyledButton size="sm" theme="white">확인</b.StyledButton>
        </div>
      </div>

      {/* 중간 크기 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Medium Buttons:</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <b.StyledButton size="md" theme="brown">중간버튼</b.StyledButton>
          <b.StyledButton size="md" theme="white">중간버튼</b.StyledButton>
        </div>
      </div>

      {/* 큰 크기 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Large Buttons:</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <b.StyledButton size="lg" theme="brown">장바구니</b.StyledButton>
          <b.StyledButton size="lg" theme="white">장바구니</b.StyledButton>
        </div>
      </div>
      {/* 엑스트라 크기 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Large Buttons:</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <b.StyledButton size="extralg" theme="brown">장바구니</b.StyledButton>
          <b.StyledButton size="extralg" theme="white">장바구니</b.StyledButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;