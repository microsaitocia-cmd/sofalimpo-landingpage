/* sections.jsx — Landing page sections */

function Logo() {
  return (
    <div className="brand">
      <BrandMark size={46} />
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", lineHeight: 1 }}>
            <span style={{ color: "var(--brand-deep)" }}>Sofa</span><span style={{ color: "var(--brand)" }}>Limpo</span>
          </span>
          <span style={{
            background: "var(--brand)", color: "white",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            padding: "2px 8px", borderRadius: 5, lineHeight: 1.6
          }}>APP</span>
        </div>
        <span className="brand-tagline" style={{ fontSize: 9.5, color: "var(--ink-mute)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
          Gestão de Higienização de Estofados
        </span>
      </div>
    </div>
  );
}

function Nav({ t }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Logo />
        <div className="nav-links">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#precos">Preços</a>
          <a href="#faq">Perguntas</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">Entrar</a>
          <a href="#precos" className="btn btn-primary">{t.ctaShort}</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Feito pra quem limpa sofá sozinho
          </div>
          <h1>
            O <em>jeito mais leve</em> de cuidar dos seus clientes, agendamentos e dinheiro.
          </h1>
          <p className="hero-lede">
            O SofaLimpo organiza o seu dia: o cliente chama no WhatsApp, você manda
            orçamento em segundos, agenda a visita e já vê o quanto entrou no mês. Sem planilha, sem caderninho.
          </p>
          <div className="hero-cta">
            <a href="#precos" className="btn btn-primary btn-lg">
              {t.cta} <Ico.Arrow />
            </a>
            <a href="#" className="btn btn-outline btn-lg">Ver demo de 2 min</a>
          </div>
          <div className="hero-microcopy">
            <span><i className="check"><Ico.Check /></i> 14 dias grátis</span>
            <span><i className="check"><Ico.Check /></i> Sem cartão</span>
            <span><i className="check"><Ico.Check /></i> Cancela quando quiser</span>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="float-card float-card-1">
        <div className="fc-title">Faturamento — Mai</div>
        <div className="fc-big">R$ 8.420</div>
        <div className="fc-trend"><Ico.TrendUp /> +23% vs. abril</div>
      </div>

      <div className="phone">
        <div className="phone-screen">
          <div className="phone-bar">
            <span>9:41</span>
            <span className="phone-bar-dots"><i></i><i></i><i></i></span>
          </div>
          <div style={{ padding: "0 14px 8px", borderBottom: "1px solid var(--line-soft)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--warm-soft)", display: "grid", placeItems: "center", color: "var(--warm)", fontWeight: 700, fontSize: 13 }}>M</div>
            <div style={{ fontSize: 13 }}>
              <strong style={{ display: "block", fontWeight: 700 }}>Marina (cliente)</strong>
              <span style={{ color: "var(--ink-mute)", fontSize: 11 }}>online</span>
            </div>
          </div>
          <div style={{ flex: 1, overflow: "hidden", padding: "12px 0", display: "flex", flexDirection: "column" }}>
            <div className="chat-msg them">Oi! Quanto pra limpar 1 sofá de 3 lugares?</div>
            <div className="chat-msg me">Boa tarde, Marina! Vou te passar agora 👇</div>
            <div className="chat-card">
              <div className="chat-card-title"><span style={{ color: "var(--brand-deep)" }}>●</span> Orçamento #0241</div>
              <div className="chat-card-row"><span>Sofá 3 lugares</span><strong>R$ 220</strong></div>
              <div className="chat-card-row"><span>Higienização anti-ácaro</span><strong>R$ 60</strong></div>
              <div className="chat-card-total"><span>Total</span><span>R$ 280</span></div>
            </div>
            <div className="chat-msg them" style={{ marginTop: "auto" }}>Fechado! Pode vir terça?</div>
          </div>
        </div>
      </div>

      <div className="float-card float-card-2">
        <div className="fc-row">
          <div className="fc-avatar">JP</div>
          <div>
            <strong style={{ fontSize: 13 }}>João Paulo</strong>
            <div className="fc-sub">Agendado • Ter, 10h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features({ t }) {
  return (
    <section className="section" id="funcionalidades">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: 720 }}>
          <span className="section-eyebrow">Tudo num lugar só</span>
          <h2>Quatro coisas <em>chatas</em> resolvidas. Pra você focar no que sabe fazer.</h2>
          <p className="section-lede">Sem 5 apps abertos. Sem perder cliente porque você esqueceu de responder. Sem fim de mês contando dinheiro no susto.</p>
        </div>

        <div className="features-grid">
          <div className="feature large">
            <div className="feature-icon"><Ico.Quote /></div>
            <h3>Orçamento em 30 segundos</h3>
            <p>Selecione o tipo de estofado, quantidade e serviços extras. O sistema calcula o valor com base na sua tabela e gera um orçamento bonito pra mandar no WhatsApp.</p>
            <div className="feat-mock">
              <div className="feat-mock-row"><span>Sofá 3 lugares</span><strong>R$ 220,00</strong></div>
              <div className="feat-mock-row"><span>Poltrona × 2</span><strong>R$ 180,00</strong></div>
              <div className="feat-mock-row"><span>Higienização anti-ácaro</span><strong>R$ 60,00</strong></div>
              <div className="feat-mock-row" style={{ borderTop: "1px solid var(--line)", marginTop: 4, paddingTop: 8 }}>
                <strong>Total</strong>
                <strong style={{ color: "var(--brand-deep)" }}>R$ 460,00</strong>
              </div>
            </div>
          </div>

          <div className="feature small warm">
            <div className="feature-icon"><Ico.Whats /></div>
            <h3>Atendimento no WhatsApp</h3>
            <p>Conecte seu número e responda mais rápido com mensagens prontas, link de agendamento e envio automático de orçamentos.</p>
            <div className="feat-mock" style={{ background: "var(--warm-soft)", borderColor: "transparent" }}>
              <div style={{ fontSize: 11.5, color: "var(--ink-mute)", marginBottom: 6 }}>Resposta automática</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>“Oi! 👋 Em quantos minutos posso te ligar?”</div>
            </div>
          </div>

          <div className="feature third">
            <div className="feature-icon"><Ico.Calendar /></div>
            <h3>Agenda inteligente</h3>
            <p>Bloqueia horários, calcula deslocamento entre bairros e envia lembrete pro cliente 1 dia antes.</p>
          </div>

          <div className="feature third">
            <div className="feature-icon"><Ico.Users /></div>
            <h3>Ficha de cada cliente</h3>
            <p>Histórico de serviços, observações do sofá e quando foi a última higienização. Tudo na palma da mão.</p>
          </div>

          <div className="feature third dark">
            <div className="feature-icon"><Ico.Money /></div>
            <h3>Financeiro sem susto</h3>
            <p>Você vê faturamento, despesas e o quanto sobrou de verdade. Relatório do mês em um toque.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="como-funciona" style={{ paddingTop: 32 }}>
      <div className="wrap">
        <div className="how">
          <div style={{ maxWidth: 620 }}>
            <span className="section-eyebrow">Como funciona</span>
            <h2>Do primeiro <em>“oi”</em> ao pagamento confirmado.</h2>
            <p className="section-lede">Três passos. Você instala em 5 minutos e já começa a trabalhar diferente.</p>
          </div>
          <div className="how-grid">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Cliente manda mensagem</h3>
              <p>O cliente chama no seu WhatsApp como sempre. O SofaLimpo já entra junto com você, mostrando o histórico (se for cliente antigo) e sugerindo resposta.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Você manda orçamento e agenda</h3>
              <p>Em alguns toques: monta o orçamento, escolhe um horário na sua agenda e o cliente recebe um link bonito pra confirmar. Sem PDF, sem foto da planilha.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Trabalho feito, dinheiro registrado</h3>
              <p>Ao finalizar o serviço, marca como concluído. O valor entra direto no seu financeiro e o cliente recebe um agradecimento. Próxima limpeza? Já vai lembrar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head center" style={{ textAlign: "center", maxWidth: 680 }}>
          <span className="section-eyebrow">Seu dia, num painel</span>
          <h2>Abra o app e <em>já saiba</em> o que fazer hoje.</h2>
          <p className="section-lede">Próximos atendimentos, mensagens não respondidas, quanto entrou na semana. Tudo na primeira tela.</p>
        </div>

        <div className="dash-wrap">
          <div className="dash-top">
            <span className="dash-dots"><i></i><i></i><i></i></span>
            <span className="dash-title">sofalimpo.com.br/painel</span>
          </div>
          <div className="dash-body">
            <aside className="dash-side">
              <div className="dash-side-section">Principal</div>
              <div className="dash-side-item active"><Ico.Home /> Início</div>
              <div className="dash-side-item"><Ico.Cal2 /> Agenda</div>
              <div className="dash-side-item"><Ico.Doc /> Orçamentos</div>
              <div className="dash-side-item"><Ico.Users /> Clientes</div>
              <div className="dash-side-section">Negócio</div>
              <div className="dash-side-item"><Ico.Chart /> Financeiro</div>
              <div className="dash-side-item"><Ico.Whats /> WhatsApp</div>
              <div className="dash-side-item"><Ico.Settings /> Ajustes</div>
            </aside>
            <main className="dash-main">
              <div className="dash-h">
                <div>
                  <h4>Bom dia, Rafael</h4>
                  <div className="dash-h-sub">Você tem 3 atendimentos hoje · 2 mensagens novas</div>
                </div>
                <a href="#" className="btn btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>Novo orçamento</a>
              </div>

              <div className="kpis">
                <div className="kpi">
                  <div className="kpi-label">Faturamento mês</div>
                  <div className="kpi-val">R$ 8.420</div>
                  <div className="kpi-trend">↑ 23%</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Agendados</div>
                  <div className="kpi-val">14</div>
                  <div className="kpi-trend">esta semana</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Orçamentos abertos</div>
                  <div className="kpi-val">6</div>
                  <div className="kpi-trend">3 aguardando</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Ticket médio</div>
                  <div className="kpi-val">R$ 312</div>
                  <div className="kpi-trend">↑ 8%</div>
                </div>
              </div>

              <div className="dash-cols">
                <div className="dash-card">
                  <h5>Próximos atendimentos <a href="#">ver agenda</a></h5>
                  <div className="appt">
                    <div className="appt-time"><span>Hoje</span><strong>10:00</strong></div>
                    <div className="appt-body">
                      <strong>João Paulo · 2 sofás + poltrona</strong>
                      <span>Rua Mariana 240 · Pinheiros</span>
                    </div>
                    <span className="appt-tag">Confirmado</span>
                  </div>
                  <div className="appt">
                    <div className="appt-time"><span>Hoje</span><strong>14:30</strong></div>
                    <div className="appt-body">
                      <strong>Marina Reis · sofá 3 lugares</strong>
                      <span>Av. Brigadeiro · Jardins</span>
                    </div>
                    <span className="appt-tag warm">A confirmar</span>
                  </div>
                  <div className="appt">
                    <div className="appt-time"><span>Amanhã</span><strong>09:00</strong></div>
                    <div className="appt-body">
                      <strong>Carla Mendes · 4 cadeiras + tapete</strong>
                      <span>Rua Augusta · Consolação</span>
                    </div>
                    <span className="appt-tag">Confirmado</span>
                  </div>
                </div>
                <div className="dash-card chart">
                  <h5>Entrada por semana</h5>
                  <div className="bar-chart">
                    <div className="bar" style={{ height: "45%" }} data-label="S1"></div>
                    <div className="bar" style={{ height: "62%" }} data-label="S2"></div>
                    <div className="bar" style={{ height: "38%" }} data-label="S3"></div>
                    <div className="bar active" style={{ height: "85%" }} data-label="S4"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [atendimentos, setAtend] = React.useState(20);
  const [ticket, setTicket] = React.useState(250);
  const [minutos, setMinutos] = React.useState(25);

  // Cálculos
  const horasEconomizadas = (atendimentos * minutos) / 60;
  // Cada atendimento extra: assume que cabem mais serviços com tempo livre. Cada serviço leva ~2h.
  const atendimentosExtras = Math.floor(horasEconomizadas / 2);
  const faturamentoExtra = atendimentosExtras * ticket;
  const custoSofa = 29;
  // Em quantos atendimentos extras o plano se paga
  const seePagaEm = Math.max(1, Math.ceil(custoSofa / ticket));
  const lucroLiquidoExtra = faturamentoExtra - custoSofa;

  const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

  return (
    <section className="section" id="calculadora">
      <div className="wrap">
        <div className="section-head center" style={{ textAlign: "center", maxWidth: 680 }}>
          <span className="section-eyebrow">Calculadora</span>
          <h2>Quanto o SofaLimpo <em>devolve</em> pro seu bolso?</h2>
          <p className="section-lede">Mexa nos números do seu dia. A gente mostra quanto tempo você economiza e em quanto isso vira faturamento.</p>
        </div>

        <div className="calc-wrap">
          <div className="calc-inputs">
            <h3>Seu <em>mês</em> hoje</h3>
            <p className="sub">Dá uma pensada rápida na sua rotina e ajuste os valores.</p>

            <div className="calc-field">
              <div className="calc-field-head">
                <label>Atendimentos por mês</label>
                <div className="val">{atendimentos}<span>serviços</span></div>
              </div>
              <input type="range" min="5" max="80" value={atendimentos} onChange={(e) => setAtend(+e.target.value)} />
            </div>

            <div className="calc-field">
              <div className="calc-field-head">
                <label>Ticket médio por serviço</label>
                <div className="val">R$ {fmt(ticket)}</div>
              </div>
              <input type="range" min="100" max="600" step="10" value={ticket} onChange={(e) => setTicket(+e.target.value)} />
            </div>

            <div className="calc-field">
              <div className="calc-field-head">
                <label>Tempo perdido por atendimento</label>
                <div className="val">{minutos}<span>min</span></div>
              </div>
              <input type="range" min="5" max="60" value={minutos} onChange={(e) => setMinutos(+e.target.value)} />
              <div style={{ fontSize: 12, color: "oklch(0.6 0.02 230)", marginTop: 8 }}>
                Tempo respondendo no WhatsApp, montando orçamento, anotando agenda, cobrando.
              </div>
            </div>
          </div>

          <div className="calc-results">
            <span className="calc-results-eyebrow">Com o SofaLimpo</span>
            <div className="calc-headline">
              Você ganha
              <span className="big">R$ {fmt(faturamentoExtra)}</span>
              a mais por mês.
            </div>

            <div className="calc-row">
              <span className="calc-row-label">Tempo economizado</span>
              <span className="calc-row-val">{fmt(horasEconomizadas)}h / mês</span>
            </div>
            <div className="calc-row">
              <span className="calc-row-label">Atendimentos extras possíveis</span>
              <span className="calc-row-val">+{atendimentosExtras} serviços</span>
            </div>
            <div className="calc-row">
              <span className="calc-row-label">Custo do SofaLimpo Pro</span>
              <span className="calc-row-val">R$ 29 / mês</span>
            </div>
            <div className="calc-row">
              <span className="calc-row-label">Sobra líquida no seu bolso</span>
              <span className="calc-row-val brand">R$ {fmt(lucroLiquidoExtra)}</span>
            </div>

            <div className="calc-foot">
              <Ico.Bolt />
              <span>O plano <strong>se paga em {seePagaEm} atendimento{seePagaEm > 1 ? "s" : ""} extra{seePagaEm > 1 ? "s" : ""}</strong>. O resto do mês é lucro.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ t }) {
  return (
    <section className="section" id="precos">
      <div className="wrap">
        <div className="section-head center" style={{ maxWidth: 680 }}>
          <span className="section-eyebrow">Planos</span>
          <h2>Comece de graça. Cresça <em>quando fizer sentido</em>.</h2>
          <p className="section-lede">Sem fidelidade, sem letra miúda. Cancele com um clique a qualquer momento.</p>
        </div>

        <div className="pricing-grid">
          <div className="plan">
            <div className="plan-name">Solo</div>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="amount">0</span>
              <span className="period">/mês</span>
            </div>
            <p className="plan-desc">Pra quem tá começando agora e quer testar sem compromisso.</p>
            <ul>
              <li>Até 10 clientes</li>
              <li>5 orçamentos por mês</li>
              <li>Agenda básica</li>
              <li>Suporte por e-mail</li>
            </ul>
            <a href="#" className="btn btn-outline plan-cta">Começar grátis</a>
          </div>

          <div className="plan featured">
            <div className="plan-badge">Mais popular</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="amount">29</span>
              <span className="period">/mês</span>
            </div>
            <p className="plan-desc">A escolha de quem já tem cliente fixo e quer crescer organizado.</p>
            <ul>
              <li>Clientes e orçamentos ilimitados</li>
              <li>Integração com WhatsApp</li>
              <li>Financeiro completo</li>
              <li>Lembretes automáticos</li>
              <li>Suporte prioritário no chat</li>
            </ul>
            <a href="#" className="btn btn-primary plan-cta" style={{ background: "var(--bg)", color: "var(--ink)" }}>{t.cta}</a>
          </div>

          <div className="plan">
            <div className="plan-name">Time</div>
            <div className="plan-price">
              <span className="currency">R$</span>
              <span className="amount">99</span>
              <span className="period">/mês</span>
            </div>
            <p className="plan-desc">Pra quando você contratar ajudante ou montar uma equipe pequena.</p>
            <ul>
              <li>Tudo do Pro</li>
              <li>Até 5 usuários</li>
              <li>Comissão por funcionário</li>
              <li>Relatórios avançados</li>
              <li>API e integrações</li>
            </ul>
            <a href="#" className="btn btn-outline plan-cta">Falar com a gente</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Preciso ter site ou loja virtual?", a: "Não. O SofaLimpo já te dá um link de orçamento e agendamento que você manda no WhatsApp, no Instagram, em qualquer lugar. Funciona pra quem só atende por mensagem." },
    { q: "Como funciona a integração com WhatsApp?", a: "Você conecta o seu número usando o WhatsApp Web. As mensagens continuam chegando no seu celular, mas o SofaLimpo te ajuda a responder mais rápido, sugerir orçamentos e marcar agenda direto na conversa." },
    { q: "Eu trabalho sozinho. Vale a pena pagar um sistema?", a: "Foi exatamente pensando em quem trabalha sozinho que a gente fez o SofaLimpo. A ideia é que o tempo que você economiza respondendo cliente, montando orçamento e organizando agenda paga o plano em uma única limpeza." },
    { q: "Funciona offline? E se eu estiver na casa do cliente sem sinal?", a: "Sim. O app guarda tudo localmente e sincroniza quando o sinal voltar. Você pode marcar o serviço como concluído mesmo sem internet." },
    { q: "Posso emitir nota fiscal?", a: "Estamos integrando com emissores de NFS-e (MEI e Simples). No plano Pro, você já consegue gerar recibo digital com sua marca. Nota fiscal automática chega ainda este ano." },
    { q: "E se eu não gostar?", a: "Cancela com um clique, sem ligação, sem retenção. Os seus dados ficam disponíveis pra exportar por 30 dias." },
  ];
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head center" style={{ textAlign: "center", maxWidth: 680 }}>
          <span className="section-eyebrow">Perguntas</span>
          <h2>Tudo o que <em>geralmente</em> perguntam.</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <details className="faq-item" key={i}>
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal({ t }) {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="wrap">
        <div className="cta-final">
          <div className="cta-blob a"></div>
          <div className="cta-blob b"></div>
          <h2 style={{ position: "relative" }}>Bora deixar a <em>parte chata</em> com a gente?</h2>
          <p style={{ position: "relative" }}>14 dias grátis, sem cartão. Em 5 minutos você já tá mandando o primeiro orçamento.</p>
          <div style={{ position: "relative", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary btn-lg">{t.cta} <Ico.Arrow /></a>
            <a href="#" className="btn btn-whats btn-lg"><Ico.Whats /> Falar no WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="tag">O sistema feito pra quem limpa sofá e quer crescer sem virar planilha andante.</p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="#" className="btn btn-whats" style={{ padding: "10px 14px", fontSize: 13 }}><Ico.Whats /> WhatsApp</a>
            </div>
          </div>
          <div>
            <h6>Produto</h6>
            <ul>
              <li><a href="#funcionalidades">Funcionalidades</a></li>
              <li><a href="#precos">Preços</a></li>
              <li><a href="#">Novidades</a></li>
              <li><a href="#">App mobile</a></li>
            </ul>
          </div>
          <div>
            <h6>Aprenda</h6>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tabela de preços</a></li>
              <li><a href="#">Comunidade</a></li>
              <li><a href="#faq">Perguntas</a></li>
            </ul>
          </div>
          <div>
            <h6>SofaLimpo</h6>
            <ul>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SofaLimpo · Feito no Brasil ☕</span>
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Features, HowItWorks, Dashboard, Calculator, Pricing, FAQ, CtaFinal, Footer });
