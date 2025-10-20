import type { Metadata } from "next"
import HackathonClientPage from "./hackathon-client"

export const metadata: Metadata = {
  title: "Hackathon del Milagro - DESAFIA x SaltaDev | Arturo Grande",
  description:
    "Participa en el Hackathon del Milagro organizado por DESAFIA y SaltaDev. Crea una app para ayudar a encontrar mascotas perdidas y gana más de $100,000 pesos en premios.",
}

export default function HackathonPage() {
  return <HackathonClientPage />
}
