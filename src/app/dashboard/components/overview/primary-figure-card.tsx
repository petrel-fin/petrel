import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface PrimaryFigureCardProps {
  title: string;
  figure: string;
  change: string;
}

export default function PrimaryFigureCard({
  title,
  figure,
  change,
}: PrimaryFigureCardProps) {
  return (
    <Card className="col-span-4 gap-1">
      <CardHeader>
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="text-2xl font-semibold">{figure}</h4>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">
          <span className="text-green-400">{change}</span> last month
        </p>
      </CardFooter>
    </Card>
  );
}
