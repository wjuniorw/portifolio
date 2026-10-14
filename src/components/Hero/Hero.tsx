import type { HTMLAttributes } from 'react'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ArrowRightAnimatedIcon, Button, Container, Heading, Section, Text } from '@core/ui'

import * as styles from './Hero.css'

interface FlowStep {
  id: string
  actor: string
  action: string
  latency: string
  domain: string
  tradeoff: string
  stack: string[]
}

interface ScenarioFlow {
  title: string
  subtitle: string
  steps: FlowStep[]
}

const ARCHITECTURAL_FLOWS: Record<'sigapro' | 'offlinePos', ScenarioFlow> = {
  sigapro: {
    title: 'Sigapro // Motor de Fluxos Orgânicos',
    subtitle: 'Substituindo quadros Kanban estáticos por execução guiada por Diagramas de Sequência',
    steps: [
      {
        id: 'step-1',
        actor: 'Domain Spec',
        action: 'emite Contrato de Sequência()',
        latency: '0.4ms',
        domain: 'Core / Living Docs',
        tradeoff:
          'A documentação não é um artefato passivo; ela dita o estado real do workflow sem colunas artificiais.',
        stack: ['DDD', 'Clean Arch', 'TypeScript'],
      },
      {
        id: 'step-2',
        actor: 'Bounded Context',
        action: 'valida Fronteira de Domínio()',
        latency: '1.8ms',
        domain: 'NestJS Bounded Context',
        tradeoff:
          'Isolamento estrito entre módulos no mesmo processo. Zero latência de rede interna, desacoplado por contratos claros.',
        stack: ['NestJS', 'MongoDB Aggregation', 'OpenTelemetry'],
      },
      {
        id: 'step-3',
        actor: 'Payment Gateway',
        action: 'processa Split & Assinatura()',
        latency: '12.4ms',
        domain: 'Go PSP Engine',
        tradeoff:
          'Serviço isolado em Go com mensageria assíncrona para garantir idempotência em webhooks multi-adquirentes.',
        stack: ['Go', 'Kafka', 'Docker'],
      },
    ],
  },
  offlinePos: {
    title: 'Edge & Offline-First // PDV Resiliente',
    subtitle: 'Operação contínua sem internet com geração de payload Pix local e sincronização eventual',
    steps: [
      {
        id: 'pos-1',
        actor: 'Operador Local',
        action: 'captura Pedido Offline()',
        latency: '0.1ms (Local)',
        domain: 'Mobile / Mini-ITX Client',
        tradeoff:
          'Persistência imediata em MMKV/SQLite local. A interface nunca bloqueia aguardando round-trip de rede.',
        stack: ['React Native', 'Zustand', 'MMKV'],
      },
      {
        id: 'pos-2',
        actor: 'Pix Engine',
        action: 'gera BRCode EMV & CRC16()',
        latency: '0.8ms',
        domain: 'Crypto / CRC16 Engine',
        tradeoff:
          'Cálculo determinístico do payload EMV e checksum CRC16 direto no hardware sem dependência de nuvem.',
        stack: ['Rust', 'Tauri', 'TypeScript'],
      },
    ],
  },
}

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  edgeColo?: string
  className?: string
}

export function Hero({ edgeColo = 'SSA_EDGE', className, ...props }: HeroProps) {
  const [activeScenario, setActiveScenario] = useState<'sigapro' | 'offlinePos'>('sigapro')
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0)
  const [hoveredCta, setHoveredCta] = useState<'inspect' | 'talks' | null>(null)

  const currentFlow = ARCHITECTURAL_FLOWS[activeScenario]
  const activeStep = currentFlow.steps[selectedStepIndex] ?? currentFlow.steps[0]

  return (
    <Section background="canvas" className={`${styles.heroSection} ${className || ''}`.trim()} {...props}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Left Column: Manifesto & Engineering Pillars */}
          <div className={styles.manifestoCol}>
            <div className={styles.originBadge}>
              <span>16°10 S, 39°00 W // BAHIA → CLOUDFLARE EDGE // 12 ANOS DE ENGENHARIA</span>
            </div>

            <Heading as="h1" size="hero" className={styles.heroTitle}>
              Sistemas com <span className={styles.accentRoots}>raízes fortes</span> e arquitetura sem ruído.
            </Heading>

            <Text size="lg" className={styles.heroLead}>
              Sou <strong className={styles.strongText}>Wilson Junior</strong>, CTO &amp; Co-fundador na{' '}
              <strong className={styles.strongText}>EnvolvaTI</strong>. Especialista em Monólitos Modulares, DDD, Clean
              Architecture, gateways de pagamento em Go e sistemas resilientes — do hardware no silício à borda na
              Cloudflare.
            </Text>

            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <span className={styles.pillarTitle}>Anti-Kanban</span>
                <span className={styles.pillarDesc}>Fluxos de sequência orgânicos &gt; cards estáticos</span>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarTitle}>Modular Monolith</span>
                <span className={styles.pillarDesc}>Isolamento estrito sem a taxa de rede distribuída</span>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarTitle}>Do Silício à Borda</span>
                <span className={styles.pillarDesc}>Go, NestJS, React, Rust, MMKV &amp; Edge Computing</span>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <Button
                as="a"
                href="#deep-dives"
                variant="primary"
                onMouseEnter={() => setHoveredCta('inspect')}
                onMouseLeave={() => setHoveredCta(null)}
              >
                <span>Inspecionar Arquiteturas</span>
                <ArrowRightAnimatedIcon isAnimating={hoveredCta === 'inspect'} />
              </Button>
              <Button
                as="a"
                href="https://talks.wjunior.dev.br"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                onMouseEnter={() => setHoveredCta('talks')}
                onMouseLeave={() => setHoveredCta(null)}
              >
                <span>Ouvir Tech Talks Interativas</span>
                <ArrowRightAnimatedIcon isAnimating={hoveredCta === 'talks'} />
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Sequence Diagram Inspector */}
          <div className={styles.inspectorCol}>
            <div className={styles.inspectorWindow}>
              <div className={styles.inspectorHeader}>
                <div className={styles.inspectorTitle}>
                  <span className={styles.inspectorStatusDot} aria-hidden="true" />
                  <span>LIVE_SEQUENCE_INSPECTOR.exe</span>
                </div>

                <div role="tablist" aria-label="Cenários de Arquitetura" className={styles.tabList}>
                  <button
                    type="button"
                    role="tab"
                    id="tab-sigapro"
                    aria-controls="panel-sigapro"
                    aria-selected={activeScenario === 'sigapro'}
                    className={activeScenario === 'sigapro' ? styles.tabActive : styles.tabInactive}
                    onClick={() => {
                      setActiveScenario('sigapro')
                      setSelectedStepIndex(0)
                    }}
                  >
                    SaaS &amp; PSP (Sigapro)
                  </button>
                  <button
                    type="button"
                    role="tab"
                    id="tab-offline"
                    aria-controls="panel-offline"
                    aria-selected={activeScenario === 'offlinePos'}
                    className={activeScenario === 'offlinePos' ? styles.tabActive : styles.tabInactive}
                    onClick={() => {
                      setActiveScenario('offlinePos')
                      setSelectedStepIndex(0)
                    }}
                  >
                    Offline-First Engine
                  </button>
                </div>
              </div>

              <div
                id={`panel-${activeScenario}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeScenario}`}
                className={styles.inspectorBody}
              >
                <div className={styles.scenarioMeta}>
                  <h3 className={styles.scenarioTitle}>{currentFlow.title}</h3>
                  <p className={styles.scenarioSubtitle}>{currentFlow.subtitle}</p>
                </div>

                <div className={styles.timeline}>
                  {currentFlow.steps.map((step, idx) => {
                    const isSelected = idx === selectedStepIndex
                    return (
                      <button
                        key={step.id}
                        type="button"
                        aria-pressed={isSelected}
                        className={isSelected ? styles.stepBtnActive : styles.stepBtn}
                        onClick={() => setSelectedStepIndex(idx)}
                      >
                        <div className={styles.stepLifeline}>
                          <span className={styles.stepIndex}>0{idx + 1}</span>
                        </div>
                        <div className={styles.stepContent}>
                          <div className={styles.stepTop}>
                            <span className={styles.actorBadge}>{step.actor}</span>
                            <span className={styles.latencyTag}>⚡ {step.latency}</span>
                          </div>
                          <div className={styles.actionCall}>{step.action}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className={styles.tradeoffPanel}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeScenario}-${activeStep.id}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className={styles.tradeoffHeader}>
                        <span>DECISÃO ARQUITETURAL // {activeStep.domain}</span>
                      </div>
                      <p className={styles.tradeoffText}>{activeStep.tradeoff}</p>
                      <div className={styles.stackChips}>
                        {activeStep.stack.map((tech) => (
                          <span key={tech} className={styles.techChip}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Edge Telemetry HUD */}
        <div className={styles.telemetryHud} role="contentinfo" aria-label="Edge Telemetry">
          <div className={styles.hudItem}>
            <span className={styles.hudLabel}>WORKER_NODE:</span>
            <span className={styles.hudValueSuccess}>CLOUDFLARE_EDGE ({edgeColo})</span>
          </div>
          <div className={styles.hudItem}>
            <span className={styles.hudLabel}>ARCH_PARADIGM:</span>
            <span className={styles.hudValue}>ASTRO_SHELL + REACT_ISLANDS</span>
          </div>
          <div className={styles.hudItem}>
            <span className={styles.hudLabel}>OBSERVABILITY:</span>
            <span className={styles.hudValue}>OTEL_TRACE_READY</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
