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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);
    
    try {
      const result = await submitToGoogleSheets(data);
    
      if (result.success) {
    setIsSubmitted(true);
    form.reset();
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(result.error || 'データの送信に失敗しました。');
      }
    } catch (error) {
      setSubmitError('予期しないエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-cinzel">
              ご相談
            </h2>
            <p className="text-white/90 text-xl md:text-2xl text-balance">
              地域の課題解決に向けた
              <span className="text-custom-accent font-semibold">アプリ開発</span>や<span className="text-custom-accent font-semibold">AIの活用に向けた研修</span>など、お気軽にご相談ください。共に地域の未来を創造しましょう。
            </p>
          </div>

          <Card className="border-2 border-main/20 shadow-xl bg-main backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-semibold text-white font-cinzel">
                お問い合わせフォーム
              </CardTitle>
              <p className="text-white/80 text-base mt-2">
                お客様の情報は厳重に管理されます。
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-200 mb-2">
                    送信完了！
                  </h3>
                  <p className="text-white/80">
                    メッセージを受信いたしました。<br />
                    スプレッドシートに保存されました。<br />
                    お返事まで少々お待ちください。
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>{submitError}</span>
                      </motion.div>
                    )}

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-lg">お名前 *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="山田太郎" 
                              {...field}
                              className="border-2 border-white/30 focus:border-custom-accent transition-colors duration-200 bg-white/10 text-white placeholder:text-white/60"
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-white/80" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-lg">メールアドレス *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="example@domain.com" 
                              {...field}
                              className="border-2 border-white/30 focus:border-custom-accent transition-colors duration-200 bg-white/10 text-white placeholder:text-white/60"
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-white/80" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-lg">お問い合わせ件名 *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="border-2 border-white/30 focus:border-custom-accent transition-colors duration-200 bg-white/10 text-white"
                                style={{ fontSize: '16px' }}
                              >
                                <SelectValue placeholder="件名を選択してください" className="text-white/60" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-main text-white border-2 border-white/30">
                              <SelectItem 
                                value="プラットフォーム開発について" 
                                className="text-white hover:bg-white/10"
                                style={{ fontSize: '16px' }}
                              >
                                プラットフォーム開発について
                              </SelectItem>
                              <SelectItem 
                                value="モバイルアプリ開発について" 
                                className="text-white hover:bg-white/10"
                                style={{ fontSize: '16px' }}
                              >
                                アプリ開発について
                              </SelectItem>
                              <SelectItem 
                                value="AI・データ分析について" 
                                className="text-white hover:bg-white/10"
                                style={{ fontSize: '16px' }}
                              >
                                AIの活用に向けた研修について
                              </SelectItem>
                              <SelectItem 
                                value="その他" 
                                className="text-white hover:bg-white/10"
                                style={{ fontSize: '16px' }}
                              >
                                その他
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-white/80" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-lg">メッセージ *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="プロジェクトの詳細や、ご質問などをお聞かせください..."
                              rows={6}
                              {...field}
                              className="border-2 border-white/30 focus:border-custom-accent transition-colors duration-200 resize-none bg-white/10 text-white placeholder:text-white/60"
                              style={{ fontSize: '16px' }}
                            />
                          </FormControl>
                          <FormMessage className="text-white/80" />
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
                          "w-full py-4 text-xl font-medium transition-all duration-300",
                          "bg-custom-accent hover:bg-custom-accent/90 text-white shadow-lg hover:shadow-xl",
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
        </motion.div>
      </div>
    </section>
  );
}