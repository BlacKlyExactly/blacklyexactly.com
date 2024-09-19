'use client';

import { SendIcon } from 'lucide-react';
import { ShowInViewOpacity } from './show-in-view/show-in-view-opacity';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useFormState } from 'react-dom';
import { sendMessage } from '../actions/sendMessage';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [state, action] = useFormState(sendMessage, { message: '' });
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;

    toast({
      title: state.message,
    });

    formRef?.current?.reset();
  }, [state]);

  return (
    <form action={action} ref={formRef}>
      <ShowInViewOpacity className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row relative">
          <div className="w-full space-y-4">
            <div className="relative">
              <Label
                htmlFor="name"
                className="absolute left-3 -top-[8px] bg-dark px-2"
              >
                Name
              </Label>
              <Input placeholder="Name" id="name" name="name" required />
            </div>
            <div className="relative">
              <Label
                htmlFor="email"
                className="absolute left-3 -top-[8px] bg-dark px-2"
              >
                Email
              </Label>
              <Input
                placeholder="Email"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="relative w-full">
            <Label
              htmlFor="message"
              className="absolute left-3 -top-[8px] bg-dark px-2"
            >
              Message
            </Label>
            <Textarea
              placeholder="Message"
              id="message"
              className="h-full"
              name="message"
              required
            />
          </div>
        </div>
      </ShowInViewOpacity>
      <Button className="mt-8">
        <SendIcon className="w-4 h-4 mr-2" />
        Send
      </Button>
    </form>
  );
};
