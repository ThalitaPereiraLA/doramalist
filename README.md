# DoramaList - Sistema de Avaliação de K-Dramas

## Sobre o Projeto
O **DoramaList** é uma aplicação web interativa desenvolvida como projeto acadêmico para a disciplina de **Interface Humano Computador**. O sistema permite que usuários façam login e avaliem seus doramas (dramas asiáticos) favoritos, acompanhando sua jornada pelo universo K-Drama.
### Contexto Acadêmico
Este projeto foi desenvolvido com o objetivo de aplicar conceitos fundamentais de IHC, com ênfase especial em:
- **Usabilidade**: Garantir que o sistema seja fácil de usar, aprender e lembrar.
- **Experiência do Usuário (UX)**: Criar uma experiência agradável, satisfatória e emocionalmente adequada.
- **Design de Interface**: Desenvolver uma interface visualmente atraente e funcional.
- **Feedback ao Usuário**: Fornecer respostas claras e imediatas às ações do usuário.

### Restrições do Projeto
- ✅ **Sem banco de dados** - Todos os dados são mantidos em memória (estado React)
- ✅ **Funcionamento offline** - Nenhuma requisição externa é realizada
- ✅ **Sem redirecionamento de páginas** - Navegação via Single Page Application (SPA)
- ✅ **Simulação local** - Autenticação e dados simulados localmente

### Sistema de Login
| Funcionalidade | Descrição |
|----------------|-----------|
| **Autenticação Local** | Validação de usuário e senha contra base de dados simulada |
| **Validação de Campos** | Verificação de campos vazios, tamanho mínimo e formato |
| **Feedback Visual** | Mensagens coloridas indicando sucesso, erro ou carregamento |
| **Mostrar/Ocultar Senha** | Botão para visualizar a senha digitada |
| **Animação de Erro** | Efeito de "shake" quando credenciais são inválidas |
| **Dica de Login** | Credenciais de teste visíveis para facilitar demonstração |

###  Dashboard de Doramas
| Funcionalidade | Descrição |
|----------------|-----------|
| **Catálogo de Doramas** | 6 doramas com título, ano, episódios, gênero e sinopse |
| **Sistema de Avaliação** | Avalie de 1 a 5 corações (ao invés de estrelas tradicionais) |
| **Lista de Assistidos** | Marque doramas como "Assistido" com badge visual |
| **Busca em Tempo Real** | Pesquise doramas pelo título instantaneamente |
| **Filtro por Gênero** | Filtre por Romance, Fantasia, Drama, Ação ou Nostalgia |
| **Estatísticas** | Contadores de doramas assistidos, avaliados e média geral |

###  Elementos Visuais
| Elemento | Descrição |
|----------|-----------|
| **Pétalas Flutuantes** | Animação de pétalas caindo no background da tela de login |
| **Confete de Corações** | Celebração animada ao dar nota máxima (5 corações) |
| **Cards Interativos** | Efeito de hover revelando sinopse e opções |
| **Gradientes Românticos** | Transições suaves de cores rosa e dourado |
| **Ícones Temáticos** | Corações, estrelas e elementos relacionados a K-Drama |

---

## Metas de Usabilidade
As metas de usabilidade são critérios essenciais que garantem que um sistema seja efetivo, eficiente e agradável de usar. Abaixo, detalho como cada meta foi implementada no DoramaList:

### 1. Fácil de Lembrar Como Usar

**Definição**: O usuário deve conseguir retornar ao sistema após um período sem uso e lembrar como operá-lo.

**Implementação no DoramaList**:
| Aspecto | Como foi aplicado |
|---------|-------------------|
| **Ícones Universais** | Cadeado para senha, olho para mostrar/ocultar, coração para favoritos |
| **Padrões Familiares** | Formulário de login segue convenções da web (usuário em cima, senha embaixo) |
| **Labels Descritivos** | Todos os campos possuem rótulos claros em português |
| **Posicionamento Consistente** | Botão de logout sempre no canto superior direito |
| **Navegação Simples** | Fluxo linear: Login → Dashboard → Avaliação |

**Evidências**:
- O botão "Entrar" possui ícone de coração, reforçando a temática
- Campo de busca tem ícone de lupa, universalmente reconhecido
- Filtros são botões com texto claro do gênero

---

### 2.  Fácil de Entender
**Definição**: O sistema deve ser intuitivo, permitindo que novos usuários compreendam sua operação sem instruções extensas.

**Implementação no DoramaList**:
| Aspecto | Como foi aplicado |
|---------|-------------------|
| **Hierarquia Visual** | Títulos grandes, textos menores |
| **Cores Semânticas** | Verde = sucesso, Vermelho = erro, Rosa = ação principal |
| **Feedback Textual** | Mensagens explicam o que aconteceu: "Usuário ou senha incorretos" |
| **Agrupamento Lógico** | Estatísticas juntas, filtros juntos, cards organizados em grid |
| **Estados Visuais Claros** | Cards de doramas assistidos têm borda verde e badge "Assistido" |

**Evidências**:
- Mensagem de erro explica o problema, não apenas "Erro"
- Badge "Assistido" usa checkmark (✓) universalmente compreendido
- Botões de filtro mudam de cor quando selecionados

---

### 3.  Útil
**Definição**: O sistema deve resolver um problema real do usuário e fornecer as funcionalidades necessárias.

**Implementação no DoramaList**:
| Problema do Usuário | Solução Implementada |
|---------------------|----------------------|
| "Quero lembrar quais doramas já assisti" | Lista de assistidos com marcação visual |
| "Quero avaliar os doramas que vi" | Sistema de 1-5 corações por dorama |
| "Quero ver meu progresso" | Estatísticas: total assistido, avaliado, média |
| "Quero encontrar um dorama específico" | Busca em tempo real por título |
| "Quero ver só doramas de romance" | Filtros por gênero |

**Evidências**:
- Cada card mostra informações essenciais: título, ano, episódios, gênero
- Revela sinopse para dorama selecionado
- Média de avaliações calculada automaticamente
---

### 4. Seguro (Percepção do Usuário)
**Definição**: O usuário deve sentir que seus dados estão protegidos e que o sistema é confiável.

**Implementação no DoramaList**:
| Aspecto de Segurança | Como foi aplicado |
|----------------------|-------------------|
| **Senha Mascarada** | Campo de senha exibe bullets por padrão |
| **Opção de Visualizar** | Usuário pode clicar no olho para conferir o que digitou |
| **Mensagem de Privacidade** | Texto: "Seus dados são processados localmente" |
| **Validação Antes de Envio** | Campos são verificados antes de processar login |
| **Feedback de Processamento** | "Verificando credenciais..." mostra que algo está acontecendo |
| **Não Expõe Informações** | Erro genérico "Usuário ou senha incorretos" (não revela qual está errado) |

**Evidências**:
- Ícone de cadeado no campo de senha reforça segurança
- Animação de loading transmite processamento ativo
- Mensagem de sucesso é personalizada com nome do usuário

---

### 5. Eficiente
**Definição**: O usuário deve conseguir completar suas tarefas com mínimo esforço e tempo.

**Implementação no DoramaList**:
| Aspecto | Como foi aplicado |
|---------|-------------------|
| **Formulário Mínimo** | Apenas 2 campos para login (usuário + senha) |
| **Atalhos de Teclado** | Enter submete o formulário |
| **Busca Instantânea** | Resultados filtram enquanto digita |
| **Filtros de Um Clique** | Botões de gênero aplicam filtro imediatamente |
| **Ações Diretas** | Clicar no coração marca como assistido instantaneamente |
| **Sem Recarregamento** | Todas as ações acontecem sem refresh de página |

**Métricas de Eficiência**:
- Login: 2 cliques (digitar usuário, digitar senha, Enter)
- Avaliar dorama: 2 cliques (hover no card, clicar na estrela)
- Marcar como assistido: 1 clique (botão de coração)
- Filtrar por gênero: 1 clique (botão do gênero)
---

## Metas de Experiência
As metas de experiência focam em como o usuário se **sente** ao usar o sistema. O DoramaList implementa 6 das metas disponíveis:

### 1. Esteticamente Apreciável
**Definição**: O sistema deve ser visualmente atraente e agradável de olhar.

**Implementação Detalhada**:
| Elemento | Implementação |
|----------|---------------|
| **Paleta de Cores** | Rosa romântico (#E85A8F), burgundy, dourado, creme |
| **Tipografia** | Playfair Display (títulos elegantes) + Poppins (corpo legível) |
| **Gradientes** | Transições suaves de rosa para dourado nos botões principais |
| **Sombras** | "Romantic shadow" com tom rosado sutil |
| **Espaçamento** | Generoso, criando respiro visual |
| **Bordas** | Arredondadas (border-radius) para suavidade |

**Elementos Visuais Especiais**:
```
✨ Pétalas animadas caindo no background
💕 Logo com coração pulsante
🌸 Cards com efeito de vidro (glassmorphism)
✨ Hover effects suaves nos cards de doramas
```
### 2. Emocionalmente Adequado
**Definição**: O sistema deve evocar emoções apropriadas ao contexto de uso.
**Contexto**: K-Dramas são conhecidos por romances intensos, momentos emocionantes e estética refinada.
**Implementação**:
| Aspecto Emocional | Como foi traduzido |
|-------------------|---------------------|
| **Romance** | Corações ao invés de estrelas, tons de rosa |
| **Acolhimento** | "Bem-vindo de volta!" e "Olá, [nome]! 💕" |
| **Nostalgia** | Design que remete a sites de fãs de doramas |
| **Celebração** | Chuva de corações ao dar nota máxima |
| **Pertencimento** | "Feito com ❤️ para amantes de K-Drama" |

### 3.  Divertido
**Definição**: O uso do sistema deve proporcionar prazer e entretenimento.
**Elementos de Diversão**:
| Elemento | Descrição |
|----------|-----------|
| **Pétalas Flutuantes** | Animação contínua de pétalas caindo, criando atmosfera |
| **Confete de Corações** | Explosão de corações ao dar 5 estrelas |
| **Animação de Coração** | Ícone do logo "bate" suavemente como um coração |
| **Hover nos Cards** | Cards "crescem" e revelam informações ao passar o mouse |
| **Transições Suaves** | Todas as interações têm animações fluidas |

**Micro-interações**:
- Botões "pressionam" ao clicar (scale 0.98)
- Corações "pulsam" ao serem clicados
- Mensagens de feedback "deslizam" para aparecer

---
### 4.  Satisfatório
**Definição**: Completar tarefas deve gerar sensação de realização.
**Implementação**:
| Momento | Recompensa Visual |
|---------|-------------------|
| **Login bem-sucedido** | Mensagem verde "Bem-vindo(a), [Nome]! ❤️" |
| **Marcar como assistido** | Badge verde aparece, coração fica preenchido |
| **Avaliar dorama** | Corações se iluminam progressivamente |
| **Dar nota 5** | EXPLOSÃO de corações na tela inteira |
| **Ver progresso** | Estatísticas no topo mostram conquistas |

**Feedback de Progresso**:
- Contador de "Assistidos" aumenta imediatamente
- Contador de "Avaliados" reflete cada nova avaliação
- Média é recalculada em tempo real
---

### 5. Interessante
**Definição**: O sistema deve despertar curiosidade e engajamento.

**Elementos de Interesse**:
| Elemento | Como desperta interesse |
|----------|-------------------------|
| **Cards com Hover** | Revelar sinopse incentiva exploração |
| **Variedade de Gêneros** | 5 gêneros diferentes para descobrir |
| **Imagens Atrativas** | Cada dorama tem imagem representativa |
| **Informações Contextuais** | Ano, número de episódios, gênero |
| **Sistema de Descoberta** | Busca e filtros incentivam exploração |
---
### 6. Motivador
**Definição**: O sistema deve encorajar o usuário a continuar usando.

**Elementos de Gamificação**:
| Elemento | Efeito Motivacional |
|----------|---------------------|
| **Contadores** | Ver números aumentar gera satisfação |
| **Badge "Assistido"** | Colecionismo visual |
| **Troféu na Média** | Símbolo de conquista |
| **Call-to-action** | "Avaliar Dorama" incentiva ação |
| **Celebração** | Confete recompensa notas máximas |

**Progressão Visual**:
```
0 assistidos → 1 assistido → 2 assistidos → ... → Todos assistidos! 🎉
```
---

## Tecnologias Utilizadas
### Stack Principal
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 18.3.1 | Biblioteca de interface de usuário |
| **TypeScript** | 5.x | Superset JavaScript com tipagem estática |
| **Vite** | 5.x | Build tool e servidor de desenvolvimento |
| **Tailwind CSS** | 3.x | Framework CSS utility-first |

### Bibliotecas Complementares
| Biblioteca | Propósito |
|------------|-----------|
| **Lucide React** | Ícones SVG otimizados |
| **Radix UI** | Componentes acessíveis (base) |
| **class-variance-authority** | Gerenciamento de variantes de componentes |
| **tailwind-merge** | Mesclagem inteligente de classes Tailwind |

### Arquitetura do Projeto
```
src/
├── components/
│   ├── ui/                    # Componentes base reutilizáveis
│   │   ├── button.tsx         # Botão com variantes (romantic, glass, glow)
│   │   └── input.tsx          # Campo de entrada com variantes
│   │
│   ├── Dashboard.tsx          # Tela principal pós-login
│   ├── DramaCard.tsx          # Card individual de dorama
│   ├── FloatingPetals.tsx     # Animação de pétalas caindo
│   ├── LoginForm.tsx          # Formulário de autenticação
│   └── StarRating.tsx         # Componente de avaliação por corações
│
├── pages/
│   ├── Index.tsx              # Página principal (controla login/dashboard)
│   └── NotFound.tsx           # Página 404
│
├── hooks/                     # Custom React hooks
├── lib/
│   └── utils.ts               # Utilitários (cn para classes)
│
├── index.css                  # Design system (variáveis CSS, animações)
├── App.tsx                    # Componente raiz com providers
└── main.tsx                   # Ponto de entrada da aplicação
```
### Design System
O projeto utiliza um design system customizado definido em `index.css`:

**Cores (HSL)**:
```css
--primary: 350 65% 55%;        /* Rosa principal */
--accent: 350 70% 65%;         /* Rosa claro */
--gold-accent: 38 70% 55%;     /* Dourado */
--success: 142 70% 45%;        /* Verde (sucesso) */
--destructive: 0 84% 60%;      /* Vermelho (erro) */
```
**Animações Customizadas**:
```css
@keyframes petal-fall    /* Pétalas caindo */
@keyframes heart-beat    /* Coração pulsando */
@keyframes float         /* Flutuação suave */
@keyframes shake         /* Tremor de erro */
@keyframes slide-up      /* Entrada deslizante */
```
---
##  Como Executar
### Pré-requisitos
- **Node.js** versão 18 ou superior
- **npm**, **yarn**, **pnpm** ou **bun** como gerenciador de pacotes

### Passo a Passo
```bash
# 1. Clone o repositório (ou baixe o código-fonte)
git clone <https://github.com/ThalitaPereiraLA/doramalist.git>
cd doramalist
# 2. Instale as dependências
npm install
# ou
yarn install
# ou
bun install

# 3. Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
bun dev
# 4. Acesse no navegador
```
### Credenciais de Teste
O sistema possui 3 usuários pré-cadastrados para testes:
| 👤 Usuário | 🔑 Senha | 📛 Nome Exibido |
|------------|----------|-----------------|
| `admin` | `admin` | Administrador |
| `drama_lover` | `dorama123` | Drama Lover |
| `kdrama_fan` | `korea2024` | K-Drama Fan |

### Build para Produção
```bash
# Gerar build otimizado
npm run build
# Visualizar build localmente
npm run preview
```
---
##  Desenvolvimento
### Decisões de Design
1. **Por que corações ao invés de estrelas?**
   - Corações são mais adequados ao tema romântico dos K-Dramas
2. **Por que pétalas caindo?**
   - Referência visual comum em cenas românticas de doramas, como petalas caindo de uma árvore.
   - Adiciona dinamismo sem distrair da funcionalidade
3. **Por que tons de rosa?**
   - Rosa é associado a romance, que é o gênero predominante em K-Dramas e eu gosto de rosa.
   
### Acessibilidade
- Labels associados a todos os campos
- Focus states visíveis
- Contraste adequado de cores
- Navegação por teclado funcional
---

##  Licença
Este projeto foi desenvolvido para fins **acadêmicos** como parte da disciplina de **Interação Humano-Computador**, porém é um projeto que já estava sendo iniciado antes mesmo da disciplina, aproveitei para aperfeiçoar e dar continuidade ao projeto.

---
<p align="center">
  <br>
  <strong>DoramaList</strong><br>
  Feito com ❤️ de uma amante de K-Drama para outros. <br>
</p>
