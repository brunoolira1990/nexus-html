import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Award, Users, Target, Cog, Factory } from "lucide-react";

const Sobre = () => {
  // Scroll reveal animations
  const heroTitleReveal = useScrollReveal({
    direction: 'up',
    distance: 60,
    duration: 800,
    delay: 200
  });
  
  const heroSubtitleReveal = useScrollReveal({
    direction: 'up',
    distance: 40,
    duration: 800,
    delay: 400
  });
  
  const statisticsReveal = useStaggeredReveal(4, {
    direction: 'up',
    distance: 50,
    duration: 800,
    staggerDelay: 150,
    threshold: 0.3
  });
  
  const storyTitleReveal = useScrollReveal({
    direction: 'left',
    distance: 60,
    duration: 800,
    threshold: 0.3
  });
  
  const storyContentReveal = useScrollReveal({
    direction: 'left',
    distance: 40,
    duration: 800,
    delay: 200,
    threshold: 0.3
  });
  
  const storyImageReveal = useScrollReveal({
    direction: 'right',
    distance: 60,
    duration: 800,
    threshold: 0.3
  });
  
  const missionVisionReveal = useStaggeredReveal(3, {
    direction: 'up',
    distance: 60,
    duration: 800,
    staggerDelay: 200,
    threshold: 0.3
  });
  
  const differentialsTitleReveal = useScrollReveal({
    direction: 'up',
    distance: 50,
    duration: 800,
    threshold: 0.3
  });
  
  const differentialsReveal = useStaggeredReveal(3, {
    direction: 'up',
    distance: 60,
    duration: 800,
    staggerDelay: 200,
    threshold: 0.3
  });
  
  const certificationsTitleReveal = useScrollReveal({
    direction: 'up',
    distance: 50,
    duration: 800,
    threshold: 0.3
  });
  
  const certificationsReveal = useScrollReveal({
    direction: 'up',
    distance: 40,
    duration: 800,
    delay: 200,
    threshold: 0.3
  });
  const values = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Produtos certificados e testados para garantir máxima segurança e durabilidade em aplicações industriais críticas."
    },
    {
      icon: Clock,
      title: "Atendimento",
      description: "Suporte técnico especializado e atendimento personalizado para cada cliente, garantindo a solução ideal."
    },
    {
      icon: Award,
      title: "Entrega",
      description: "Logística eficiente e prazos cumpridos para manter sua operação funcionando sem interrupções."
    }
  ];

  const certifications = [
    "ISO 9001:2015",
    "API 6D",
    "ASME B16.34",
    "ABNT NBR",
    "CE Marking",
    "PED 2014/68/EU"
  ];

  const statistics = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "500+", label: "Clientes Ativos" },
    { number: "10,000+", label: "Produtos Entregues" },
    { number: "50+", label: "Parceiros Certificados" }
  ];

  return (
    <Layout>
      <SEO
        title="Sobre a Nexus - Nossa História e Valores"
        description="Conheça a história da Nexus Válvulas. Com mais de 20 anos de experiência, somos especialistas em válvulas e conexões industriais. Nossa missão, visão e valores."
        keywords="sobre nexus, história empresa, missão visão valores, certificações industriais, nexus válvulas empresa"
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              ref={heroTitleReveal.ref}
              style={heroTitleReveal.style}
            >
              Sobre a Nexus
            </h1>
            <p 
              className="text-xl text-primary-foreground/80 mb-8"
              ref={heroSubtitleReveal.ref}
              style={heroSubtitleReveal.style}
            >
              Com mais de 20 anos de experiência no mercado, a Nexus é uma das principais 
              fornecedoras de válvulas e conexões industriais no Brasil, oferecendo soluções 
              confiáveis e inovadoras para os mais diversos setores industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                ref={statisticsReveal[index].ref}
                style={statisticsReveal[index].style}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 
                className="text-3xl font-bold"
                ref={storyTitleReveal.ref}
                style={storyTitleReveal.style}
              >
                Nossa História
              </h2>
              <div 
                className="space-y-4 text-muted-foreground"
                ref={storyContentReveal.ref}
                style={storyContentReveal.style}
              >
                <p>
                  Fundada em 2004, a Nexus nasceu da visão de fornecer soluções completas 
                  em válvulas e conexões industriais para o mercado brasileiro. Iniciamos 
                  como uma pequena empresa familiar e crescemos para nos tornar uma das 
                  principais distribuidoras do setor.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos parcerias estratégicas com os principais 
                  fabricantes mundiais, permitindo-nos oferecer produtos de alta qualidade 
                  com suporte técnico especializado e preços competitivos.
                </p>
                <p>
                  Hoje, atendemos diversos segmentos industriais, desde pequenas empresas 
                  até grandes multinacionais, sempre mantendo nosso compromisso com a 
                  excelência no atendimento e qualidade dos produtos.
                </p>
              </div>
            </div>
            <div 
              className="bg-muted rounded-lg aspect-video overflow-hidden"
              ref={storyImageReveal.ref}
              style={storyImageReveal.style}
            >
              <img
                src="/imagens/nexus-faixada.png" // coloque o caminho da imagem da empresa
                alt="Empresa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              ref={missionVisionReveal[0].ref}
              style={missionVisionReveal[0].style}
            >
              <Card>
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Fornecer soluções completas em válvulas e conexões industriais, 
                    garantindo qualidade, segurança e eficiência para nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div
              ref={missionVisionReveal[1].ref}
              style={missionVisionReveal[1].style}
            >
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Ser reconhecida como a principal fornecedora de válvulas e conexões 
                    industriais no Brasil, referência em qualidade e inovação.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div
              ref={missionVisionReveal[2].ref}
              style={missionVisionReveal[2].style}
            >
              <Card>
                <CardHeader className="text-center">
                  <Cog className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground text-center space-y-1">
                    <li>Qualidade e Excelência</li>
                    <li>Integridade e Transparência</li>
                    <li>Inovação Contínua</li>
                    <li>Foco no Cliente</li>
                    <li>Responsabilidade Social</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Differentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            ref={differentialsTitleReveal.ref}
            style={differentialsTitleReveal.style}
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de válvulas e conexões industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  ref={differentialsReveal[index].ref}
                  style={differentialsReveal[index].style}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-10 w-10 text-accent" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            ref={certificationsTitleReveal.ref}
            style={certificationsTitleReveal.style}
          >
            <h2 className="text-3xl font-bold mb-4">Certificações e Normas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos produtos atendem às principais normas e certificações internacionais
            </p>
          </div>

          <div 
            className="flex flex-wrap justify-center gap-4"
            ref={certificationsReveal.ref}
            style={certificationsReveal.style}
          >
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>      
    </Layout>
  );
};

export default Sobre;