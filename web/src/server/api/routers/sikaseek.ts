import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

type Metadata = {
  page_label: string
  file_name: string
}
type NodeRelationShip = {
  node_id: string
  node_type: unknown
  metadata: Metadata
  hash: string
}
type Node = {
  id_: string
  embeddings: unknown
  metadata: Metadata
  excluded_embed_metadata_keys: []
  excluded_llm_metadata_keys: []
  hash: string
  text: string
  start_char_idx: unknown
  end_char_idx: unknown
}
export type SourceNode = {
  node: Node
  score: number
}
export type Response = {
  response: string
  source_nodes: SourceNode[]
  metadata: Record<string, Metadata>
}

export const sikaseekRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const result = await fetch(`http://127.0.0.1:8000/${input.text}`)
      const data = (await result.json()) as Response
      return data
    }),
})
