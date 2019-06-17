workflow "Update GitHub Stats" {
  resolves = ["Gatsby Stats Loader"]
  on = "schedule(50 * * * *)"
}

action "Gatsby Stats Loader" {
  uses = "./.github/actions/stats-loader"
  secrets = [
    "GITHUB_TOKEN",
    "type",
    "project_id",
    "private_key_id",
    "client_email",
    "client_id",
    "auth_uri",
    "token_uri",
    "auth_provider_x509_cert_url",
    "client_x509_cert_url",
    "private_key",
  ]
}

workflow "Upload GitHub Stats" {
  resolves = ["Gatsby Stats Poller"]
  on = "schedule(45 * * * *)"
}

action "Gatsby Stats Poller" {
  uses = "./.github/actions/github-poll"
  secrets = [
    "GITHUB_TOKEN",
    "type",
    "project_id",
    "private_key_id",
    "client_email",
    "client_id",
    "auth_uri",
    "token_uri",
    "auth_provider_x509_cert_url",
    "client_x509_cert_url",
    "private_key",
  ]
}
