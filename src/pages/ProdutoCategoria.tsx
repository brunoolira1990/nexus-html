import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProdutoCategoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  // Scroll reveal animations
  const backButtonReveal = useScrollReveal({
    direction: 'left',
    distance: 40,
    duration: 600,
    delay: 200
  });
  
  const headerTitleReveal = useScrollReveal({
    direction: 'up',
    distance: 60,
    duration: 800,
    delay: 400
  });
  
  const headerDescReveal = useScrollReveal({
    direction: 'up',
    distance: 40,
    duration: 800,
    delay: 600
  });

  // Mock data - em um app real, isso viria de uma API ou banco de dados
  const categoryData: Record<string, any> = {
    "valvulas-industriais": {
      title: "Válvulas Industriais",
      description: "Nossa linha completa de válvulas industriais oferece soluções confiáveis para controle de fluxo, pressão e temperatura em aplicações industriais críticas.",
      products: [
        {
          id: "valvula-esfera",
          name: "Válvula Esfera",
          description: "Válvulas esfera bipartidas e tripartidas para aplicações de alta pressão",
          image: "/imagens/valvulas-industriais/valvula_esfera.png",
          applications: ["Petróleo e Gás", "Química", "Água"],
          materials: ["Aço Carbono", "Aço Inox", "Bronze"]
        },
        {
          id: "valvula-borboleta",
          name: "Válvula Borboleta",
          description: "Válvulas borboleta wafer e lug para grandes diâmetros",
          image: "/imagens/valvulas-industriais/valvula_borboleta.png",
          applications: ["Saneamento", "HVAC", "Alimentícia"],
          materials: ["Ferro Fundido", "Aço Inox", "PVC"]
        },
        {
          id: "valvula-gaveta",
          name: "Válvula Gaveta",
          description: "Válvulas gaveta para isolamento total de linha",
          image: "/imagens/valvulas-industriais/valvula_gaveta.png",
          applications: ["Água", "Óleo", "Vapor"],
          materials: ["Ferro Fundido", "Aço Carbono", "Aço Inox"]
        },
        {
          id: "valvula-globo",
          name: "Válvula Globo",
          description: "Válvulas globo para controle preciso de fluxo",
          image: "/imagens/valvulas-industriais/valvula_globo.png",
          applications: ["Vapor", "Condensado", "Ar Comprimido"],
          materials: ["Aço Carbono", "Aço Inox", "Bronze"]
        },
        {
          id: "valvula-agulha",
          name: "Válvula Agulha",
          description: "Válvulas agulha para controle fino de pequenos fluxos",
          image: "/imagens/valvulas-industriais/valvula_agulha.png",
          applications: ["Instrumentação", "Teste", "Amostragem"],
          materials: ["Aço Inox", "Monel", "Hasteloy"]
        },
        {
          id: "valvula-retencao",
          name: "Válvula Retenção",
          description: "Válvulas de retenção para prevenção de fluxo reverso",
          image: "/imagens/valvulas-industriais/valvula_retencao.png",
          applications: ["Bombeamento", "Compressores", "Sistemas"],
          materials: ["Ferro Fundido", "Aço Carbono", "Aço Inox"]
        }
      ]
    },
    "conexoes": {
      title: "Conexões",
      description: "Conexões roscadas e soldadas em diversos materiais para sistemas de tubulação industrial.",
      products: [
        {
          id: "conexoes-tubulares",
          name: "Conexões Tubulares",
          description: "Linha completa de conexões tubulares para sistemas de alta pressão e temperatura",
          image: "/imagens/conexoes_tubulares.png",
          applications: ["Petróleo e Gás", "Petroquímica", "Refinarias"],
          materials: ["Aço Carbono", "Aço Inox", "Duplex"]
        },
        {
          id: "conexoes-forjadas",
          name: "Conexões Forjadas",
          description: "Conexões forjadas de alta resistência fabricadas conforme normas ASME B16.11, MSS SP-79 e BS 3799. Ideais para aplicações de alta pressão e temperatura em sistemas industriais críticos.",
          image: "/imagens/conexoes_forjadas.png",
          applications: ["Petróleo e Gás", "Petroquímica", "Refinarias", "Usinas de Energia", "Química", "Papel e Celulose", "Sistemas de Vapor", "Offshore"],
          materials: ["Aço Carbono A105", "Aço Inox 304/316", "Aço Inox 321/347", "Liga de Níquel", "Duplex 2205", "Super Duplex 2507", "Inconel", "Monel"]
        },
        {
          id: "conexoes-ferro",
          name: "Conexões de Ferro",
          description: "Conexões em ferro fundido e ferro maleável para aplicações gerais",
          image: "/imagens/conexoes_ferro.png",
          applications: ["Água", "Ar Comprimido", "Vapor Baixa Pressão"],
          materials: ["Ferro Fundido", "Ferro Maleável", "Galvanizado"]
        }
      ]
    },
    // Adicionar outros dados de categoria aqui...
  };

  const currentCategory = categoryData[categoria || ""] || {
    title: "Categoria não encontrada",
    description: "",
    products: []
  };

  // Create staggered reveal for products
  const productsReveal = useStaggeredReveal(currentCategory.products.length, {
    direction: 'up',
    distance: 60,
    duration: 800,
    staggerDelay: 150,
    threshold: 0.2
  });

  const handleProductClick = (productId: string) => {
    navigate(`/produtos/${categoria}/${productId}`);
  };

  return (
    <Layout>
      <SEO
        title={`${currentCategory.title} - Nexus Válvulas`}
        description={currentCategory.description || `Confira nossa linha completa de ${currentCategory.title.toLowerCase()} para aplicações industriais. Qualidade e confiabilidade garantidas.`}
        keywords={`${currentCategory.title.toLowerCase()}, produtos industriais, nexus válvulas, ${categoria}`}
      />
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div
            ref={backButtonReveal.ref}
            style={backButtonReveal.style}
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/produtos')}
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Produtos
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              ref={headerTitleReveal.ref}
              style={headerTitleReveal.style}
            >
              {currentCategory.title}
            </h1>
            {currentCategory.description && (
              <p 
                className="text-xl text-primary-foreground/80"
                ref={headerDescReveal.ref}
                style={headerDescReveal.style}
              >
                {currentCategory.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentCategory.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.products.map((product, index) => (
                <div
                  key={product.id}
                  ref={productsReveal[index]?.ref}
                  style={productsReveal[index]?.style}
                >
                  <Card 
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent h-full"
                    onClick={() => handleProductClick(product.id)}
                  >
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-white rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Aplicações:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Materiais:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.materials.map((material: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      variant="outline"
                    >
                      Ver Especificações
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">
                Categoria em desenvolvimento
              </h3>
              <p className="text-muted-foreground mb-8">
                Esta categoria de produtos está sendo preparada. Entre em contato para mais informações.
              </p>
              <Button onClick={() => navigate('/contato')}>
                Entre em Contato
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProdutoCategoria;