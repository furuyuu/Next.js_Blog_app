import { supabase } from "@/utils/supabaseClient";
import type { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id , title, content} = req.body;

    const { data, error } = await supabase
        .from("posts")
        .insert([{id, title, content, createdAt: new Date().toISOString() }]);

    if (error) {
    // 4. 詳細なエラーをサーバーログに出力
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
}
