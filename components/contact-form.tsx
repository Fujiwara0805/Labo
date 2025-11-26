'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitToGoogleSheets } from '@/app/actions/google-sheets';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'お名前は2文字以上で入力してください' }),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  subject: z.string().min(1, { message: '件名を選択してください' }),
  message: z.string().min(10, { message: 'メッセージは10文字以上で入力してください' }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitToGoogleSheets(data);
    
      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        
        // 成功トーストを表示
        toast({
          title: "送信完了！",
          description: "お問い合わせを受信いたしました。お返事まで少々お待ちください。",
          variant: "default",
        });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // エラートーストを表示
        toast({
          title: "送信エラー",
          description: result.error || 'データの送信に失敗しました。',
          variant: "destructive",
        });
      }
    } catch (error) {
      // 予期しないエラーのトーストを表示
      toast({
        title: "送信エラー",
        description: '予期しないエラーが発生しました。',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 section-overlay">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            ご相談
          </h2>
          <p className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            地域の課題解決に向けた
            <span className="font-semibold text-gray-900">アプリ開発</span>や<span className="font-semibold text-gray-900">AIの活用に向けた研修</span>など、お気軽にご相談ください。共に地域の未来を創造しましょう。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="luxury-border luxury-shadow-xl rounded-none bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-gray-900 tracking-tight">
                お問い合わせフォーム
              </CardTitle>
              <p className="text-gray-600 text-lg mt-3 font-light">
                お客様の情報は厳重に管理されます。
              </p>
            </CardHeader>
            <CardContent className="p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    送信完了！
                  </h3>
                  <p className="text-base text-gray-600">
                    メッセージを受信いたしました。<br />
                    スプレッドシートに保存されました。<br />
                    お返事まで少々お待ちください。
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-xl">お名前 *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="山田太郎" 
                              {...field}
                              className={cn(
                                "border-2 transition-colors duration-200 bg-white text-gray-900 placeholder:text-gray-500",
                                fieldState.error 
                                  ? "border-red-400 focus:border-red-500" 
                                  : "border-gray-300 focus:border-custom-accent"
                              )}
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 font-medium" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-xl">メールアドレス *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="example@domain.com" 
                              {...field}
                              className={cn(
                                "border-2 transition-colors duration-200 bg-white text-gray-900 placeholder:text-gray-500",
                                fieldState.error 
                                  ? "border-red-400 focus:border-red-500" 
                                  : "border-gray-300 focus:border-custom-accent"
                              )}
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 font-medium" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-xl">お問い合わせ件名 *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className={cn(
                                  "border-2 transition-colors duration-200 bg-white text-gray-900",
                                  fieldState.error 
                                    ? "border-red-400 focus:border-red-500" 
                                    : "border-gray-300 focus:border-custom-accent"
                                )}
                                style={{ fontSize: '16px' }}
                              >
                                <SelectValue placeholder="件名を選択してください" className="text-gray-500" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white text-gray-900 border-2 border-gray-200">
                              <SelectItem 
                                value="プラットフォーム開発について" 
                                className="text-gray-900 hover:bg-gray-100"
                                style={{ fontSize: '16px' }}
                              >
                                ご相談・お問い合わせ
                              </SelectItem>
                              <SelectItem 
                                value="モバイルアプリ開発について" 
                                className="text-gray-900 hover:bg-gray-100"
                                style={{ fontSize: '16px' }}
                              >
                                アプリ開発について
                              </SelectItem>
                              <SelectItem 
                                value="AI・データ分析について" 
                                className="text-gray-900 hover:bg-gray-100"
                                style={{ fontSize: '16px' }}
                              >
                                AIの活用に向けた研修について
                              </SelectItem>
                              <SelectItem 
                                value="イベント企画について" 
                                className="text-gray-900 hover:bg-gray-100"
                                style={{ fontSize: '16px' }}
                              >
                                イベント企画について
                              </SelectItem>
                              <SelectItem 
                                value="その他" 
                                className="text-gray-900 hover:bg-gray-100"
                                style={{ fontSize: '16px' }}
                              >
                                その他
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-500 font-medium" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-xl">メッセージ *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="プロジェクトの詳細や、ご質問などをお聞かせください..."
                              rows={6}
                              {...field}
                              className={cn(
                                "border-2 transition-colors duration-200 resize-none bg-white text-gray-900 placeholder:text-gray-500",
                                fieldState.error 
                                  ? "border-red-400 focus:border-red-500" 
                                  : "border-gray-300 focus:border-custom-accent"
                              )}
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 font-medium" />
                        </FormItem>
                      )}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full py-4 text-xl font-medium transition-all duration-300 rounded-none luxury-hover luxury-shadow-lg",
                          "bg-gray-900 hover:bg-gray-800 text-white",
                          "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                      >
                        {isSubmitting ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center"
                          >
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            送信中...
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-6 h-6 mr-2" />
                            送信する
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}