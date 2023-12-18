# Adapter Library

## Usage

- See [wnp.h](https://github.com/keifufu/WebNowPlaying-Library/blob/main/include/wnp.h)
- See examples in [/examples](https://github.com/keifufu/WebNowPlaying-Library/blob/main/examples)

```c
examples/simple.c:
#include "stdio.h"
#include "wnp.h"

int main(void)
{
  // port, adapter version
  if (wnp_start(1234, "1.0.0", NULL) < 0) {
    perror("Failed to start wnp");
    return -1;
  }

  for (int i = 0; i < 60; i++) {
    // get the "active" player
    struct wnp_player* player = wnp_get_active_player(true);
    // print the title
    wnp_lock(player);
    printf("Title: %s\n", player->title);
    wnp_unlock(player);
    // try to play-pause
    int event_id = wnp_try_play_pause(player);
    // optionally, wait for a result
    char* event_outcomes[] = {"", "succeeded", "failed"};
    printf("event %d %s\n", event_id, event_outcomes[wnp_wait_for_event_result(event_id)]);
    sleep_ms(1000);
  }

  wnp_stop();
  return 0;
}
```
