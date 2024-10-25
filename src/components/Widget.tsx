import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';


const Widget: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <p>This is the dialog content!</p>
    </DialogContent>
  </Dialog>
);

export default Widget;
