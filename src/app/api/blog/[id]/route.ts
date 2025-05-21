
import { supabase } from "@/utils/supabaseClient";
import type { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {

    const id = req.url.split("/blog/")[1];

    const { data, error } = await supabase
                .from("posts")
                .select("*").eq("id", id).single();
    
            if (error) {
                return NextResponse.json(error);
            }
    
            if (!data) {
                notFound();
            }

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, {status: 200});
}
