'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(1, {
    message: '请填写姓名'
  }),
  phone: z.string(),
  email: z
    .string()
    .min(1, {
      message: '请填写邮箱'
    })
    .email({
      message: '邮箱格式不正确'
    }),
  message: z.string()
})

export function SubmitContcatForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    // mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const { reset } = form

  function onSubmit(values) {
    console.log(values)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(() => {
        toast.success('留言提交成功!')
        reset()
      })
      .catch(() => toast.error('提交失败, 请稍后再试'))
      .finally(() => setIsSubmitting(false))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-6')}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                姓名<span className="ml-1 text-lg font-light leading-4 text-rose-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="请输入姓名或昵称" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                邮箱<span className="ml-1 text-lg font-light leading-4 text-rose-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="请输入邮箱" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>联系方式</FormLabel>
              <FormControl>
                <Input placeholder="请输入联系方式" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>留言</FormLabel>
              <FormControl>
                <Input placeholder="请输入留言" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isSubmitting ? 'summitting' : 'submit'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.span>
          </AnimatePresence>
        </Button>
      </form>
    </Form>
  )
}
