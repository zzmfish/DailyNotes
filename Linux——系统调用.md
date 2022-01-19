---
tags: Linux
---



#### signal

###### SIGCHLD

```C++
void proc_exit()
{
  int wstat;
  union wait wstat;
  pid_t	pid;

  while (TRUE) {
    pid = wait3(&wstat, WNOHANG, (struct rusage*)NULL);
    if (pid == 0)
      return;
    else if (pid == -1)
      return;
    else
      printf("Return code: %d\n", wstat.w_retcode);
    }
}
main()
{
  signal(SIGCHLD, proc_exit);
}
```

