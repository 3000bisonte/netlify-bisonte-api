"use client";
import { useSearchParams } from 'next/navigation';
import FormularioRemitente from '@/components/FormularioRemitente';

export default function RemitenteEditPage(){
  const search = useSearchParams();
  const id = search.get('id') || null;
  return <FormularioRemitente id={id} />;
}
