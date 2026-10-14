/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    runtime?: {
      cf?: {
        colo?: string
        [key: string]: unknown
      }
      [key: string]: unknown
    }
  }
}
