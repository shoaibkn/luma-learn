"use server";

import axios from "axios";

const test_data = {
  title: "DevOps Roadmap",
  stages: [
    {
      name: "Foundations",
      skills: [
        {
          skill: "Linux Fundamentals",
          keywords: ["linux basics", "shell commands", "unix"],
        },
        {
          skill: "Version Control Systems",
          keywords: ["git", "github", "version control"],
        },
        {
          skill: "Basic Scripting",
          keywords: ["bash scripting", "shell scripting", "automation basics"],
        },
        {
          skill: "Networking Basics",
          keywords: ["tcp/ip", "dns", "network protocols"],
        },
      ],
    },
    {
      name: "Configuration & Automation",
      skills: [
        {
          skill: "Configuration Management",
          keywords: ["ansible", "chef", "puppet"],
        },
        {
          skill: "Infrastructure as Code",
          keywords: ["terraform", "iac tools", "cloudformation"],
        },
        {
          skill: "CI/CD Concepts",
          keywords: [
            "continuous integration",
            "continuous deployment",
            "jenkins basics",
          ],
        },
        {
          skill: "Containerization",
          keywords: ["docker", "container basics", "image management"],
        },
      ],
    },
    {
      name: "Cloud & Environment Management",
      skills: [
        {
          skill: "Cloud Platforms",
          keywords: ["aws", "azure", "gcp"],
        },
        {
          skill: "Orchestration",
          keywords: ["kubernetes", "container orchestration", "k8s"],
        },
        {
          skill: "Environment Management",
          keywords: [
            "staging environments",
            "infrastructure scaling",
            "dev/stage/prod",
          ],
        },
      ],
    },
    {
      name: "Monitoring & Security",
      skills: [
        {
          skill: "Monitoring & Logging",
          keywords: ["prometheus", "grafana", "elk stack"],
        },
        {
          skill: "Security Best Practices",
          keywords: ["devops security", "iam", "secrets management"],
        },
        {
          skill: "Incident Management",
          keywords: ["incident response", "downtime", "alerting"],
        },
        {
          skill: "Backup & Recovery",
          keywords: [
            "backup strategies",
            "disaster recovery",
            "data restoration",
          ],
        },
      ],
    },
    {
      name: "Advanced DevOps & Optimization",
      skills: [
        {
          skill: "Infrastructure Optimization",
          keywords: ["cost optimization", "load balancing", "auto-scaling"],
        },
        {
          skill: "Site Reliability Engineering",
          keywords: ["sre", "service reliability", "error budgets"],
        },
        {
          skill: "DevOps Automation",
          keywords: ["pipeline automation", "chatops", "self-healing systems"],
        },
        {
          skill: "Observability & Analytics",
          keywords: [
            "distributed tracing",
            "metrics analysis",
            "logging pipelines",
          ],
        },
      ],
    },
  ],
};

const YT_API_KEY = process.env.YOUTUBE_API_KEY;

if (!YT_API_KEY) {
  throw new Error("Missing YouTube API Key in env (YOUTUBE_API_KEY)");
}

const BASE_URL = "https://www.googleapis.com/youtube/v3";

/**
 * Fetch videos for multiple keywords and return structured results.
 * @param queries string[] - list of keywords
 */
export async function fetchYouTubeVideos(queries: string[]) {
  try {
    const results: any[] = [];

    // const testQueries = ["linux basics", "shell commands", "unix"];
    for (const query of queries) {
      const searchUrl = `${BASE_URL}/search`;

      const searchRes = await axios.get(searchUrl, {
        params: {
          key: YT_API_KEY,
          q: query,
          part: "snippet",
          type: "video",
          maxResults: 5,
        },
      });

      const videoIds = searchRes.data.items.map((item: any) => item.id.videoId);

      if (videoIds.length === 0) continue;

      // Fetch video details
      const videosUrl = `${BASE_URL}/videos`;

      const detailsRes = await axios.get(videosUrl, {
        params: {
          key: YT_API_KEY,
          id: videoIds.join(","),
          part: "snippet,contentDetails,statistics",
        },
      });

      const mapped = detailsRes.data.items.map((video: any) => ({
        query,
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        thumbnails: video.snippet.thumbnails,
        duration: video.contentDetails.duration,
        views: video.statistics.viewCount,
        likes: video.statistics.likeCount,
        url: `https://www.youtube.com/watch?v=${video.id}`,
      }));

      results.push(...mapped);
    }

    return {
      status: "success",
      count: results.length,
      videos: results,
    };
  } catch (error: any) {
    console.error("YouTube API error:", error?.response?.data || error.message);

    return {
      status: "error",
      message: "Failed to fetch YouTube videos",
      error: error?.response?.data || error.message,
    };
  }
}
