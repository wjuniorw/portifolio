import type { HTMLAttributes } from 'react'

import { Container, Heading, Section, Text } from '@core/ui'

import * as styles from './RootsAndCraft.css'

interface CraftPillar {
  id: string
  subhead: string
  title: string
  description: string
  tags: string[]
}

const CRAFT_PILLARS: CraftPillar[] = [
  {
    id: 'bahia-roots',
    subhead: '16°10 S, 39°00 W // Origem & Princípios',
    title: 'Raízes Indígenas & Engenharia sem Ruído',
    description:
      '12 anos construindo sistemas duradouros a partir de Santa Cruz Cabrália, Bahia. Resiliência real forjada em ambientes desafiadores de conectividade intermitente e orçamentos que exigem máxima eficiência de CPU e memória, longe de modismos efêmeros da indústria.',
    tags: [
      'Cabrália, BA',
      '12 Anos de Engenharia',
      'Eficiência Computacional',
      'Foco em Domínio & DDD',
      'Resiliência Operacional',
    ],
  },
  {
    id: 'hardware-craft',
    subhead: 'Maker Culture & Hardware Craftsmanship',
    title: 'Engenharia de Hardware & Silício na Bancada',
    description:
      'Construção e dimensionamento de servidores para home lab, Frente de caixa Mini-ITX, cabeamento estruturado, testes de estresse térmico, diagnóstico em bancada com multímetro e osciloscópio, e interface de software com periféricos seriais (POS, impressoras térmicas e microcontroladores).',
    tags: [
      'Mini-ITX Custom Builds',
      'Hardware Diagnostics',
      'RS232 / USB Serial',
      'Thermal Optimization',
      'Tauri / Rust Embedded',
    ],
  },
  {
    id: 'self-hosted-infra',
    subhead: 'Self-Hosted Sovereign Cloud',
    title: 'Cloud Soberana & Homelab Bare-Metal',
    description:
      'Infraestrutura autohospedada independente de hyperscalers proprietários. Orquestração containerizada com Docker e Coolify, malha de túneis seguros via Cloudflare Tunnels e WireGuard, e clusters locais para staging determinístico e testes de resiliência.',
    tags: [
      'Coolify',
      'Docker Compose',
      'Cloudflare Tunnels',
      'WireGuard VPN',
      'ZFS Storage',
      'Linux Alpine / Debian',
    ],
  },
  {
    id: 'observability-telemetry',
    subhead: 'End-to-End Observability',
    title: 'Observabilidade Fina & Telemetria em Produção',
    description:
      'Instrumentação profunda de software com métricas e rastreamento distribuído reais. Tracing unificado via OpenTelemetry e Jaeger, dashboards operacionais no Grafana e alertas proativos com Prometheus para redução drástica do tempo médio de resolução (MTTR).',
    tags: [
      'OpenTelemetry (OTel)',
      'Jaeger Distributed Traces',
      'Prometheus Metrics',
      'Grafana Dashboards',
      'Structured JSON Logs',
    ],
  },
]

export interface RootsAndCraftProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function RootsAndCraft({ className, ...props }: RootsAndCraftProps) {
  return (
    <Section
      id="raizes"
      background="canvas"
      className={`${styles.section} ${className || ''}`.trim()}
      {...props}
    >
      <Container className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.sectionBadge}>ORIGENS, HARDWARE &amp; INFRAESTRUTURA SOBERANA</div>
          <Heading as="h2" size="4xl" className={styles.sectionTitle}>
            Do Silício ao Código // Raízes &amp; Homelab
          </Heading>
          <Text size="lg" className={styles.sectionLead}>
            Engenharia não é apenas abstração de alto nível; é o domínio completo da pilha. Das placas de circuito
            impresso na bancada aos servidores autohospedados e à borda global da Cloudflare.
          </Text>
        </div>

        <div className={styles.craftGrid}>
          {CRAFT_PILLARS.map((pillar) => (
            <article key={pillar.id} className={styles.craftCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardSubhead}>{pillar.subhead}</span>
                <Heading as="h3" size="xl" className={styles.cardTitle}>
                  {pillar.title}
                </Heading>
                <p className={styles.cardDescription}>{pillar.description}</p>
              </div>

              <div className={styles.tagsWrapper}>
                {pillar.tags.map((tag) => (
                  <span key={tag} className={styles.craftTag}>
                    {tag}
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
