// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sanityClient from '@sanity/client'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function submitSurvey(
  req,
  res
) {
  const { _id, Date, FinalSurvey } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'surveyResponses',
      Date,
      FinalSurvey
    })
  } catch (err) {
    return res.status(500).json({ message: "couldn't submit the survey", err })
  }

  return res.status(200).json({ message: 'survey submitted' })
}
