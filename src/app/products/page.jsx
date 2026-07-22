import ProductsPage from "./productsPage";

export const metadata = {
  title: "Produtos - Artora | Descubra os Melhores Produtos",
  description:
    "Explore os melhores produtos de arte, papelaria e criatividade na Artora. Encontre itens selecionados para desenhar, criar e se inspirar com qualidade e preço justo.",
     alternates: {
      canonical: 'https://artora.company/products',
    }
};


export default function Page() {
  return (<ProductsPage />);
}