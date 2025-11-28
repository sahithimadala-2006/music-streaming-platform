package com.musicstreaming.controller;

import com.musicstreaming.model.Playlist;
import com.musicstreaming.repository.PlaylistRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/playlists")
public class PlaylistController {

    private final PlaylistRepository playlistRepo;

    public PlaylistController(PlaylistRepository playlistRepo) {
        this.playlistRepo = playlistRepo;
    }

    @GetMapping
    public List<Playlist> getAllPlaylists() {
        return playlistRepo.findAll();
    }

    @PostMapping
    public Playlist addPlaylist(@RequestBody Playlist playlist) {
        return playlistRepo.save(playlist);
    }
}