import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function uploadImage(file, bucket = 'images') {
  const fileName = `${Date.now()}_${file.name}`;

  const { data, error } = await supabase
    .storage
    .from(bucket)
    .upload(fileName, file);

  if (error) throw error;

  const { data: publicUrlData } = supabase
    .storage
    .from(bucket)
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}
