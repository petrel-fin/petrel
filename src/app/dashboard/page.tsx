import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function DashboardOverviewPage() {
  return (
    <div className="flex w-full p-4">
      <div className="grid w-full grid-cols-10 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter className="flex-col gap-2">Card Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
}
