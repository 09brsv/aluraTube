import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://fxdbqplvsxzltmvfhsve.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZGJxcGx2c3h6bHRtdmZoc3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODQxNzAsImV4cCI6MTk4Mzc2MDE3MH0.Xxn3f2FC72w7YY6UXn9iMW_kP46maBrtxnFTeEyFh9I";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


const VideoService = () => {
  return {
    getAllVideos(){
       return supabase
      .from("video")
      
    }
  }
}

export default VideoService