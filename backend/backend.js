import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://doozybxyhxgzzyvkkbcr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvb3p5Ynh5aHhnenp5dmtrYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODA0OTQsImV4cCI6MjA2NjE1NjQ5NH0._FRHuyXLNgTUUDR0GwgiDYaZrJCgLAE3FSZZSgpo1xA";
const supabase = createClient(supabaseUrl, supabaseKey);
