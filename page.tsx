
import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() { const [points, setPoints] = useState(500);

return ( <main className="min-h-screen bg-black text-white p-6 font-sans"> <header className="text-center mb-10"> <h1 className="text-4xl font-bold mb-2">IPRO</h1> <p className="text-gray-400 text-lg">مرحبا بك في عالم IPRO</p> <div className="mt-4"> <Input placeholder="ابحث هنا..." className="max-w-md mx-auto bg-zinc-800 text-white" /> </div> </header>

<Tabs defaultValue="social" className="w-full">
    <TabsList className="grid grid-cols-3 max-w-lg mx-auto bg-zinc-900 rounded-xl">
      <TabsTrigger value="social">التواصل</TabsTrigger>
      <TabsTrigger value="store">المتجر</TabsTrigger>
      <TabsTrigger value="live">البث المباشر</TabsTrigger>
    </TabsList>

    <TabsContent value="social">
      <section className="max-w-xl mx-auto mt-8">
        <Card className="bg-zinc-900 rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">منشور تواصلي</h2>
            <p className="text-gray-300 mb-4">هذا مثال على منشور يعرض المحتوى الاجتماعي.</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button variant="ghost" className="text-white">إعجاب</Button>
              <Button variant="ghost" className="text-white">تعليق</Button>
              <Button variant="ghost" className="text-white">مشاركة</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </TabsContent>

    <TabsContent value="store">
      <section className="max-w-xl mx-auto mt-8">
        <Card className="bg-zinc-900 rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">منتج 1</h2>
            <p className="text-gray-300 mb-4">وصف مختصر للمنتج.</p>
            <p className="text-green-400 font-bold mb-2">السعر: 100 بيري</p>
            <Button className="bg-green-600 hover:bg-green-500">اشترِ الآن</Button>
          </CardContent>
        </Card>
      </section>
    </TabsContent>

    <TabsContent value="live">
      <section className="max-w-xl mx-auto mt-8">
        <Card className="bg-zinc-900 rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">البث المباشر</h2>
            <p className="text-gray-300">سيتم عرض البث المباشر هنا قريباً.</p>
          </CardContent>
        </Card>
      </section>
    </TabsContent>
  </Tabs>

  <footer className="text-center mt-16 text-gray-500">
    <p>رصيدك: <span className="text-white font-bold">{points} بيري</span></p>
    <p className="mt-4">© 2025 IPRO alhaji. جميع الحقوق محفوظة.</p>
  </footer>
</main>

); }
