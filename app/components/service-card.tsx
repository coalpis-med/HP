import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Card className="bg-black/50 border-none">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <Button variant="link" className="group">
          もっとみる
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}