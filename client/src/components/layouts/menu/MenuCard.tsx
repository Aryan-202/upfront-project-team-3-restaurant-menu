import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type MenuItem } from '@/data/mock'
import { PlusCircle, Box } from 'lucide-react'

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card group h-full">
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className="absolute top-4 right-4 bg-background/90 text-foreground shadow-sm backdrop-blur border-none hover:bg-background">
          {item.category}
        </Badge>
      </div>

      <CardHeader className="flex-none">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl leading-tight font-bold group-hover:text-primary transition-colors">
            {item.name}
          </CardTitle>
          <span className="text-xl font-extrabold text-primary shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <CardDescription className="line-clamp-2 mt-2">
          Delicious {item.category.toLowerCase()} option containing {item.calories} calories to satisfy your cravings.
        </CardDescription>
      </CardHeader>

      <CardContent className="grow">
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Nutritional Information</h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {item.nutrients.slice(0, 4).map(nutrient => (
              <div key={nutrient._id} className="text-xs">
                <span className="font-medium text-foreground">{nutrient.name}:</span>{' '}
                <span className="text-muted-foreground">{nutrient.amount}</span>
                {nutrient.benefit && (
                  <span className="block text-[10px] text-muted-foreground/70 mt-0.5">
                    ({nutrient.benefit})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 flex-none pb-6 grid grid-cols-2 gap-2 w-full">
        <Button variant="secondary" className="w-full gap-1.5 rounded-full font-medium px-2" size="default">
          <Box className="w-4 h-4 shrink-0" />
          <span className="truncate text-xs sm:text-sm">View in AR</span>
        </Button>
        <Button className="w-full gap-1.5 rounded-full font-medium px-2" size="default">
          <PlusCircle className="w-4 h-4 shrink-0" />
          <span className="truncate text-xs sm:text-sm">Add to Order</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
