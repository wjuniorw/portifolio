import type { HTMLAttributes } from 'react'

import { useState } from 'react'

import { Container, Heading, PulseFilterIcon, Section, Text } from '@core/ui'

import * as styles from './ArchitectureCases.css'

type CategoryFilter = 'all' | 'saas' | 'fintech' | 'edge' | 'enterprise'

interface CaseStudy {
  id: string
  category: CategoryFilter
  title: string
  role: string
  metric: string
  impact: string
  decisions: string
  stack: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'sigapro-saas',
    category: 'saas',
    title: 'EnvolvaTI & Sigapro // Plataforma SaaS & Workflows Orgânicos',
    role: 'CTO & Co-founder | 2026 – Presente',
    metric: 'Latência interna < 2ms // 100% visibilidade de fluxo',
    impact:
      'Substituição de Kanbans estáticos por diagramas de sequência vivos. Orquestração de workflows complexos com MongoDB aggregations e isolamento estrito de bounded contexts via NestJS Modular Monolith.',
    decisions:
      'Zero microserviços prematuros: comunicação in-process desacoplada por contratos claros e eventos assíncronos de domínio. A documentação do fluxo é viva e atua como a própria máquina de estados.',
    stack: ['TypeScript', 'NestJS', 'Modular Monolith', 'DDD', 'MongoDB', 'Docker', 'OpenTelemetry'],
  },
  {
    id: 'envolvati-payments',
    category: 'fintech',
    title: 'EnvolvaTI Payments // Gateway de Pagamento & Split Engine',
    role: 'Core Architect | 2023 – Presente',
    metric: 'Idempotência estrita // P99 < 35ms transacional',
    impact:
      'Motor financeiro em Go com suporte a múltiplos provedores adquirentes (Asaas, Efí, Stone), splits de pagamento determinísticos, conciliação e processamento assíncrono de webhooks.',
    decisions:
      'Serviço independente em Go com consumo de mensageria via Kafka. Tabelas de idempotência em PostgreSQL eliminam risco de double-spending ou reprocessamento desordenado de notificações bancárias.',
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'Clean Architecture', 'Prometheus'],
  },
  {
    id: 'offline-pos',
    category: 'edge',
    title: 'PDV Resiliente & Projeto Cais // Edge & Offline-First',
    role: 'Principal Engineer | 2022 – 2024',
    metric: '0 downtime de venda // Pix local gerado em < 1ms',
    impact:
      'Sistema de Ponto de Venda projetado para operação comercial contínua sem depender de internet. Interface com captura de pedidos por voz, impressão serial direta e motor de cobrança Pix autônomo.',
    decisions:
      'Arquitetura Local-First com MMKV e SQLite embarcados. Geração autônoma de BRCode Pix EMV padrão Banco Central calculando CRC16 em Rust/Tauri direto nos terminais locais.',
    stack: ['React Native', 'Rust', 'Tauri', 'MMKV', 'SQLite', 'WebSockets', 'EMV / CRC16'],
  },
  {
    id: 'enterprise-consulting',
    category: 'enterprise',
    title: 'Consultoria Enterprise // Energisa, Lidia Bank & Raia Drogasil',
    role: 'Senior Software Architect & Consultant | 2018 – 2023',
    metric: 'Milhões de reqs/dia // Compliance bancário & BACEN',
    impact:
      'Liderança técnica e intervenção arquitetural em grandes corporações brasileiras: migração de monolitos legados para microsserviços escaláveis, esteiras de mensageria bancária e modernização de frontends críticos de alto tráfego.',
    decisions:
      'Implementação de padrões de observabilidade distribuída com Jaeger e OpenTelemetry, governança de contratos OpenAPI/gRPC e modernização gradual via Strangler Fig pattern.',
    stack: ['Java / Spring Boot', 'Node.js', 'Kubernetes', 'AWS', 'Kafka', 'React', 'OpenTelemetry'],
  },
]

const FILTER_LABELS: Array<{ id: CategoryFilter; label: string }> = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'saas', label: 'SaaS & Monolith' },
  { id: 'fintech', label: 'Fintech & Go' },
  { id: 'edge', label: 'Edge & Offline-First' },
  { id: 'enterprise', label: 'Consultoria Enterprise' },
]

export interface ArchitectureCasesProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function ArchitectureCases({ className, ...props }: ArchitectureCasesProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')
  const [hoveredFilter, setHoveredFilter] = useState<CategoryFilter | null>(null)

  const filteredCases =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter)

  return (
    <Section
      id="deep-dives"
      background="surface"
      className={`${styles.section} ${className || ''}`.trim()}
      {...props}
    >
      <Container className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.sectionBadge}>CASE STUDIES &amp; ENGENHARIA DE IMPACTO</div>
          <Heading as="h2" size="4xl" className={styles.sectionTitle}>
            Arquiteturas Vivas &amp; Histórico Enterprise
          </Heading>
          <Text size="lg" className={styles.sectionLead}>
            Decisões técnicas de alto impacto, trade-offs pragmáticos e sistemas desenhados para suportar volume,
            resiliência e evolução orgânica sem acúmulo de débito técnico.
          </Text>
        </div>

        <div role="group" aria-label="Filtro de Casos de Arquitetura" className={styles.filterRow}>
          {FILTER_LABELS.map((tab) => {
            const isSelected = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isSelected}
                className={isSelected ? styles.filterBtnActive : styles.filterBtn}
                onMouseEnter={() => setHoveredFilter(tab.id)}
                onMouseLeave={() => setHoveredFilter(null)}
                onClick={() => setActiveFilter(tab.id)}
              >
                <PulseFilterIcon isAnimating={isSelected || hoveredFilter === tab.id} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className={styles.casesGrid}>
          {filteredCases.map((caseItem) => (
            <article key={caseItem.id} className={styles.caseCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardContextRow}>
                  <span className={styles.cardRole}>{caseItem.role}</span>
                  <span className={styles.cardMetric}>⚡ {caseItem.metric}</span>
                </div>

                <Heading as="h3" size="2xl" className={styles.cardTitle}>
                  {caseItem.title}
                </Heading>

                <p className={styles.cardImpact}>{caseItem.impact}</p>

                <div className={styles.cardDecisionsBox}>
                  <div className={styles.cardDecisionsTitle}>Trade-off &amp; Decisão Arquitetural</div>
                  <p className={styles.cardDecisionsText}>{caseItem.decisions}</p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                {caseItem.stack.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
