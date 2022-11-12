import styled from "styled-components"

export default function Home() {
  return (
    <>
      <ProductPreview />
    </>
  )
}

const StyledProductPreview = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  width: 45.92vw;
  height: ${(43.92*3)/4 + 'vw'};
  border-radius: 1em;
  & > img {
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2em;
  }
  .productType {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
  .productName {
    font-family: ${({ theme }) => theme.text.fontFamily[1]};
  }
  .productDescription {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
  .productPrice {
    color: ${({ theme }) => theme.colors.darkCyan};
    font-family: ${({ theme }) => theme.text.fontFamily[1]};
    span {
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      font-family: ${({ theme }) => theme.text.fontFamily[0]};
    }
  }
  .addToCart {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkCyan};
  }
`
function ProductPreview() {
  return (
    <StyledProductPreview>
      <img src="/images/image-product-desktop.jpg" />
      <div className="wrapper">
        <div className="productType">P E R F U M E</div>
        <h1 className="productName">Gabrielle Essence Eau De Parfum</h1>
        <div className="productDescription">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
        <div className="productPrice">
          $149.99<span>$169.99</span>
        </div>
        <button className="addToCart">
          <CartImage />
          Add to Cart
        </button>
      </div>
    </StyledProductPreview>
  )
}

function CartImage() {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" />
    </svg>
  )
}
