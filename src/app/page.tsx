import { DownloadIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { CopyText } from "@/components/copy-text";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between bg-background px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <ShadcnMark className="size-6" />
          <span className="font-bold">shadcn/brand</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/ncdai/shadcn-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <Separator
            className="data-[orientation=vertical]:h-5"
            orientation="vertical"
          />

          <ToggleTheme />
        </div>
      </header>

      <main className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
        <Card>
          <CardContent>
            <div className="grid grid-cols-1 gap-y-6 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div className="text-muted-foreground">Mark</div>
              <div className="group flex items-center gap-6">
                <CopyText
                  value={SHADCN_UI_MARK_SVG}
                  message="Copied Mark as SVG"
                >
                  <ShadcnMark className="h-8" />
                </CopyText>

                <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CopyButton value={SHADCN_UI_MARK_SVG} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy Mark as SVG</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-6"
                        variant="secondary"
                        size="icon"
                        asChild
                      >
                        <a href="/shadcn-ui-mark.svg" download>
                          <DownloadIcon className="size-3" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Mark as SVG</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div className="text-muted-foreground">Logotype</div>

              <div className="group flex items-center gap-6">
                <CopyText
                  value={SHADCN_UI_LOGOTYPE_SVG}
                  message="Copied Logotype as SVG"
                >
                  <ShadcnLogotype className="h-8" />
                </CopyText>

                <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CopyButton value={SHADCN_UI_LOGOTYPE_SVG} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy Logotype as SVG</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-6"
                        variant="secondary"
                        size="icon"
                        asChild
                      >
                        <a href="/shadcn-ui-logotype.svg" download>
                          <DownloadIcon className="size-3" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Logotype as SVG</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div className="text-muted-foreground">Correct brand name</div>
              <ul className="[&_li]:py-0.5">
                <li>
                  <CopyText className="font-bold" value="shadcn/ui">
                    shadcn/ui
                  </CopyText>
                </li>
                <li>
                  <p className="font-mono text-sm text-balance text-muted-foreground/70">
                    {"/*"} Use when entering {"`/`"} is not allowed. {"*/"}
                  </p>
                </li>
                <li>
                  <CopyText className="font-bold" value="shadcn-ui">
                    shadcn-ui
                  </CopyText>
                </li>
              </ul>

              <div className="text-destructive">Incorrect brand name</div>
              <div className="cursor-not-allowed space-y-2 text-destructive line-through decoration-destructive/70 [&_li]:py-0.5">
                <ul>
                  <li>Shadcn/ui</li>
                  <li>ShadCn/ui</li>
                  <li>ShadCN/ui</li>
                </ul>
                <ul>
                  <li>Shadcn/UI</li>
                  <li>ShadCn/UI</li>
                  <li>ShadCN/UI</li>
                </ul>
              </div>

              <div className="text-muted-foreground">GitHub Repository</div>
              <div>
                <a
                  className="underline-offset-4 hover:underline"
                  href="https://git.new/ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  git.new/ui
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="mx-auto max-w-3xl space-y-1 px-4 py-6 text-sm text-muted-foreground italic sm:px-6">
        <p className="text-balance">
          * Unofficial page based on my personal research about{" "}
          <a
            className="font-bold"
            href="https://x.com/shadcn"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shadcn
          </a>
          .
        </p>
        <p className="text-balance">
          * This site was created to share accurate information about shadcn/ui,
          as {"I've"} seen its name often misspelled on social media. If{" "}
          <a
            className="font-bold"
            href="https://x.com/shadcn"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shadcn
          </a>{" "}
          finds any inaccuracies, I welcome any corrections. —{" "}
          <a
            className="font-bold"
            href="https://x.com/iamncdai"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iamncdai
          </a>
        </p>
      </footer>
    </>
  );
}

function ShadcnMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.44 10.94a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5Zm-1.5-8.25a1.5 1.5 0 1 1 2.12 2.12L4.81 19.06a1.5 1.5 0 1 1-2.12-2.12L16.94 2.69Z"
      />
    </svg>
  );
}

function ShadcnLogotype(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 113 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.44 10.94a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5Zm-1.5-8.25a1.5 1.5 0 1 1 2.12 2.12L4.81 19.06a1.5 1.5 0 1 1-2.12-2.12L16.94 2.69Z"
      />
      <path
        fill="currentColor"
        d="M38.112 12.272c-.128-.8-.816-1.28-1.536-1.28-.736 0-1.312.384-1.28 1.008.032.624.752.896 1.568 1.04 2.496.384 3.712 1.04 3.712 2.64 0 1.696-1.584 2.512-3.76 2.512-2.48 0-4.064-1.072-4.192-2.88l2.416-.112c.144.816.752 1.312 1.712 1.312.64 0 1.376-.256 1.36-.88-.016-.72-.832-.864-1.648-1.04-2.352-.448-3.632-1.04-3.632-2.592 0-1.68 1.408-2.688 3.84-2.688 2.128 0 3.568 1.072 3.84 2.864l-2.4.096ZM42.056 6.64h2.4v3.968c.496-.928 1.408-1.28 2.416-1.28 1.776 0 2.848 1.296 2.848 3.216V18h-2.4v-4.608c0-1.376-.32-2.112-1.312-2.112-1.008 0-1.552.768-1.552 2.112V18h-2.4V6.64ZM51.346 12.144c.32-1.808 1.712-2.816 3.936-2.816 2.576 0 3.904 1.264 3.904 3.68v2.672c0 .56.224.688.528.688h.304V18l-.416.016c-.56.016-2.208.176-2.432-1.312-.432.88-1.376 1.488-2.928 1.488-1.728 0-3.04-.928-3.04-2.432 0-1.568 1.168-2.16 3.216-2.56l2.336-.48c-.016-1.232-.48-1.824-1.488-1.824-.816 0-1.328.464-1.52 1.36l-2.4-.112Zm2.32 3.536c0 .544.448.96 1.328.96 1.04-.016 1.792-.784 1.792-2.32v-.112l-1.392.256c-1.008.192-1.728.352-1.728 1.216ZM69.48 6.64V18H67.19l-.048-1.232c-.48.896-1.44 1.424-2.576 1.424-2.208 0-3.584-1.712-3.584-4.432 0-2.72 1.376-4.432 3.584-4.432 1.072 0 2.016.512 2.512 1.376V6.64h2.4Zm-6.033 7.12c0 1.584.768 2.608 1.872 2.608 1.168 0 1.904-1.024 1.904-2.608 0-1.616-.736-2.64-1.904-2.64-1.136 0-1.872 1.024-1.872 2.64ZM77.109 12.768c-.144-1.024-.816-1.6-1.664-1.6-1.2 0-1.888.944-1.888 2.592 0 1.648.688 2.592 1.888 2.592.896 0 1.568-.576 1.712-1.68l2.48.096c-.224 2.112-1.936 3.424-4.192 3.424-2.64 0-4.352-1.76-4.352-4.432 0-2.672 1.712-4.432 4.352-4.432 2.192 0 3.904 1.264 4.128 3.328l-2.464.112ZM80.993 9.52h2.16l.048 1.344c.465-1.12 1.409-1.536 2.545-1.536 1.84 0 2.912 1.248 2.912 3.216V18h-2.4v-4.656c0-1.36-.304-2.112-1.313-2.112-1.007 0-1.551.752-1.551 2.112V18h-2.4V9.52ZM90.23 19.76 94.95 6h2.4l-4.735 13.76H90.23ZM106.766 18h-2.192l-.048-1.328c-.464 1.104-1.392 1.52-2.496 1.52-1.808 0-2.88-1.248-2.88-3.216V9.52h2.4v4.656c0 1.36.288 2.112 1.28 2.112s1.536-.752 1.536-2.112V9.52h2.4V18ZM108.759 9.52h2.4V18h-2.4V9.52Zm-.048-1.104V6.64h2.48v1.776h-2.48Z"
      />
    </svg>
  );
}

const SHADCN_UI_MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.44 10.94a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5Zm-1.5-8.25a1.5 1.5 0 1 1 2.12 2.12L4.81 19.06a1.5 1.5 0 1 1-2.12-2.12L16.94 2.69Z"/></svg>`;
const SHADCN_UI_LOGOTYPE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 113 24"><path fill="currentColor" d="M18.44 10.94a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5Zm-1.5-8.25a1.5 1.5 0 1 1 2.12 2.12L4.81 19.06a1.5 1.5 0 1 1-2.12-2.12L16.94 2.69ZM38.112 12.272c-.128-.8-.816-1.28-1.536-1.28-.736 0-1.312.384-1.28 1.008.032.624.752.896 1.568 1.04 2.496.384 3.712 1.04 3.712 2.64 0 1.696-1.584 2.512-3.76 2.512-2.48 0-4.064-1.072-4.192-2.88l2.416-.112c.144.816.752 1.312 1.712 1.312.64 0 1.376-.256 1.36-.88-.016-.72-.832-.864-1.648-1.04-2.352-.448-3.632-1.04-3.632-2.592 0-1.68 1.408-2.688 3.84-2.688 2.128 0 3.568 1.072 3.84 2.864l-2.4.096Zm3.944-5.632h2.4v3.968c.496-.928 1.408-1.28 2.416-1.28 1.776 0 2.848 1.296 2.848 3.216V18h-2.4v-4.608c0-1.376-.32-2.112-1.312-2.112-1.008 0-1.552.768-1.552 2.112V18h-2.4V6.64Zm9.29 5.504c.32-1.808 1.712-2.816 3.936-2.816 2.576 0 3.904 1.264 3.904 3.68v2.672c0 .56.224.688.528.688h.304V18l-.416.016c-.56.016-2.208.176-2.432-1.312-.432.88-1.376 1.488-2.928 1.488-1.728 0-3.04-.928-3.04-2.432 0-1.568 1.168-2.16 3.216-2.56l2.336-.48c-.016-1.232-.48-1.824-1.488-1.824-.816 0-1.328.464-1.52 1.36l-2.4-.112Zm2.32 3.536c0 .544.448.96 1.328.96 1.04-.016 1.792-.784 1.792-2.32v-.112l-1.392.256c-1.008.192-1.728.352-1.728 1.216ZM69.48 6.64V18h-2.29l-.048-1.232c-.48.896-1.44 1.424-2.576 1.424-2.208 0-3.584-1.712-3.584-4.432 0-2.72 1.376-4.432 3.584-4.432 1.072 0 2.016.512 2.512 1.376V6.64h2.4Zm-6.033 7.12c0 1.584.768 2.608 1.872 2.608 1.168 0 1.904-1.024 1.904-2.608 0-1.616-.736-2.64-1.904-2.64-1.136 0-1.872 1.024-1.872 2.64Zm13.662-.992c-.144-1.024-.816-1.6-1.664-1.6-1.2 0-1.888.944-1.888 2.592 0 1.648.688 2.592 1.888 2.592.896 0 1.568-.576 1.712-1.68l2.48.096c-.224 2.112-1.936 3.424-4.192 3.424-2.64 0-4.352-1.76-4.352-4.432 0-2.672 1.712-4.432 4.352-4.432 2.192 0 3.904 1.264 4.128 3.328l-2.464.112Zm3.884-3.248h2.16l.048 1.344c.465-1.12 1.409-1.536 2.545-1.536 1.84 0 2.912 1.248 2.912 3.216V18h-2.4v-4.656c0-1.36-.304-2.112-1.313-2.112-1.007 0-1.551.752-1.551 2.112V18h-2.4V9.52Zm9.237 10.24L94.95 6h2.4l-4.735 13.76H90.23ZM106.766 18h-2.192l-.048-1.328c-.464 1.104-1.392 1.52-2.496 1.52-1.808 0-2.88-1.248-2.88-3.216V9.52h2.4v4.656c0 1.36.288 2.112 1.28 2.112s1.536-.752 1.536-2.112V9.52h2.4V18Zm1.993-8.48h2.4V18h-2.4V9.52Zm-.048-1.104V6.64h2.48v1.776h-2.48Z"/></svg>`;
