import pygame
import sys

pygame.init()

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Clickable Button")

WHITE = (255, 255, 255)
BLUE = (0, 122, 255)
DARK_BLUE = (0, 90, 200)
FONT = pygame.font.SysFont(None, 40)

button_rect = pygame.Rect(300, 250, 200, 60)

running = True
while running:
    screen.fill(WHITE)

    # Get mouse position
    mouse_pos = pygame.mouse.get_pos()
    mouse_clicked = pygame.mouse.get_pressed()[0]

    # Button hover effect
    if button_rect.collidepoint(mouse_pos):
        pygame.draw.rect(screen, DARK_BLUE, button_rect)
        if mouse_clicked:
            print("Button Clicked!")
    else:
        pygame.draw.rect(screen, BLUE, button_rect)

    # Button text
    text = FONT.render("Start REIT Quest", True, WHITE)
    text_rect = text.get_rect(center=button_rect.center)
    screen.blit(text, text_rect)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pygame.display.flip()

pygame.quit()
sys.exit()
